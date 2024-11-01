import React, { useState } from "react"; 

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && input.trim()) {
      setTasks((prevTasks) => [...prevTasks, input]); 
      setInput('');
    }
  };

  const handleDelete = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index)); 
  };

  return (
    <div className="home">
      <h1>Tareas</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Tareas a realizar"
      />
      <ul>
        {tasks.length === 0 ? (
          <li>No hay tareas pendientes</li>
        ) : (
          tasks.map((task, index) => (
            <li key={index} className="task-item">
              {task}
              <button className="delete-button" onClick={() => handleDelete(index)}>
                X
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Home;
