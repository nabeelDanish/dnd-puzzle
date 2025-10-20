import React from 'react';

export function PlayerSelect({ onSelect }) {
  return (
    <div className="card">
      <h1 style={{ color: '#39ff14', textShadow: '0 0 8px #39ff14' }}>Mainframe Access</h1>
      <p>Select your pod:</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1em', alignItems: 'center', justifyContent: 'center', margin: '2em 0' }}>
        {[1,2,3,4,5].map(i => (
          <button key={i} onClick={() => onSelect(i-1)} style={{ width: '80%', maxWidth: '260px' }}>{`Player ${i}`}</button>
        ))}
      </div>
    </div>
  );
}
