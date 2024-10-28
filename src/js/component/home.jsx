import React, { useState } from "react"; // Mantén la importación de useState

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && input.trim()) {
      setTasks((prevTasks) => [...prevTasks, input]); // Usa función anterior para evitar problemas de estado
      setInput('');
    }
  };

  const handleDelete = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index)); // Similar aquí
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
