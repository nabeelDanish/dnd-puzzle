import React, { useState } from 'react';

export function GuessForm({ guesses, onGuessChange, onSubmit, players, feedback }) {
  // The correct answers for each pod (should match the logic in App.jsx)
  const correct = [79, 67, 84, 65, 76];
  // Track per-guess error messages
  const [errors, setErrors] = useState(Array(players.length).fill(''));

  // Handle input change and verify immediately
  const handleInputChange = (i, val) => {
    onGuessChange(i, val);
    let msg = '';
    if (val !== '') {
      const num = Number(val);
      if (num === correct[i]) {
        msg = '✅ Correct';
      } else if (num < correct[i]) {
        msg = '⬆️ Too low';
      } else if (num > correct[i]) {
        msg = '⬇️ Too high';
      }
    }
    setErrors(prev => {
      const arr = [...prev];
      arr[i] = msg;
      return arr;
    });
  };

  return (
    <form onSubmit={onSubmit}>
      {feedback && (
        <div
          style={{
            marginTop: '1em',
            color: feedback.startsWith('✅') ? '#39ff14' : '#ff3939',
            fontWeight: 'bold',
          }}
        >
          {feedback}
        </div>
      )}
      <p>Enter your access code for all pods:</p>
      {players.map((p, i) => (
        <div key={i} style={{ marginBottom: '0.5em' }}>
          <label>{`${p.name}`}: </label>
          <input
            type="text"
            value={guesses[i]}
            onChange={e => handleInputChange(i, e.target.value)}
            className="flicker-input"
            style={{
              width: '4em',
              fontSize: '1.2em',
              color: '#39ff14',
              background: '#111',
              border: '1px solid #39ff14',
              textAlign: 'center',
            }}
          />
          {errors[i] && (
            <span style={{ marginLeft: '1em', color: errors[i].startsWith('✅') ? '#39ff14' : '#ff3939', fontWeight: 'bold' }}>{errors[i]}</span>
          )}
        </div>
      ))}
      <button type="submit" style={{ marginTop: '1em' }}>
        Enter Access Code
      </button>
    </form>
  );
}
