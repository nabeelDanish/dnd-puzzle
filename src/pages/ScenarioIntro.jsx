import React from 'react';

export function ScenarioIntro({ playerIdx, players, onBack }) {
  return (
    <div className="card">
      <button onClick={onBack} style={{ position: 'absolute', left: 20, top: 20, background: '#222', color: '#39ff14', border: '1px solid #39ff14', borderRadius: '6px', padding: '0.5em 1em', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 0 8px #39ff1444' }}>
        ← Back
      </button>
      <h2 style={{ color: '#39ff14', textShadow: '0 0 8px #39ff14' }}>Scenario Intro</h2>
      <p style={{ fontStyle: 'italic' }}>
        “The mainframe’s access code has been split across your pods.<br />
        Each fragment interacts with the others — the transformation is not local.<br />
        Share only what your clue says. Alone, you cannot decode your number.<br />
        Work together to reveal the sequence.”
      </p>
      <hr />
      <h3>{`Player ${playerIdx + 1} – ${players[playerIdx].name}`}</h3>
      <div style={{ fontSize: '2em', color: '#39ff14', textShadow: '0 0 8px #39ff14' }}>
        <span className="flicker">{players[playerIdx].shown}</span>
      </div>
      <p style={{ fontWeight: 'bold', color: '#39ff14' }}>{players[playerIdx].clue}</p>
    </div>
  );
}
