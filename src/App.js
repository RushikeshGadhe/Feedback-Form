import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState('');

  const handleClear = () => {
    setName('');
    setMessage('');
    setRating('');
  };

  return (
    <div className="App">
      <h1>Feedback Form</h1>

      <form>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Message:</label><br />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label>Rating (1-5):</label><br />
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>

        <button type="button" onClick={handleClear}>
          Clear Form
        </button>
      </form>

      <hr />

      <h2>Live Preview</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Message:</strong> {message}</p>
      <p><strong>Rating:</strong> {rating}</p>
    </div>
  );
}

export default App;
