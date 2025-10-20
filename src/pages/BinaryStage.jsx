import React from 'react';

export function BinaryStage() {
  const finalNumbers = [79, 67, 84, 65, 76];
  return (
    <div className="card">
      <h2 style={{ color: '#39ff14', textShadow: '0 0 8px #39ff14' }}>Fragment assembly complete</h2>
      <p style={{ fontStyle: 'italic', color: '#39ff14' }}>
        Initiating Binary Translation Protocol.<br /><br />
      </p>
      <div style={{ marginTop: '1.5em', display: 'flex', gap: '1em', justifyContent: 'center' }}>
        {finalNumbers.map((num, idx) => (
          <span
            key={idx}
            style={{
              fontWeight: 'bold',
              color: '#39ff14',
              textShadow: '0 0 12px #39ff14, 0 0 4px #39ff14',
              fontSize: '2em',
              padding: '0.2em 0.5em',
              borderRadius: '8px',
              background: 'rgba(30,60,30,0.18)',
            }}
          >
            {num}
          </span>
        ))}
      </div>
      <div style={{ marginTop: '2em', textAlign: 'center' }}>
        {/* Minimalist division-by-2 binary conversion for 11 */}
        <div style={{ display: 'inline-block', textAlign: 'left', fontFamily: 'monospace', fontSize: '1.1em', margin: '0 auto', background: 'rgba(20,40,20,0.08)', borderRadius: '8px', padding: '1em' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7em', marginBottom: '0.3em' }}>
            <span style={{ color: '#39ff14', fontWeight: 'bold' }}>11</span>
            <span style={{ color: '#888' }}>÷ 2 →</span>
            <span style={{ color: '#00eaff', fontWeight: 'bold' }}>5</span>
            <span style={{ color: '#888' }}>+</span>
            <span style={{ color: '#ffe600', fontWeight: 'bold' }}>1</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7em', marginBottom: '0.3em' }}>
            <span style={{ color: '#00eaff', fontWeight: 'bold' }}>5</span>
            <span style={{ color: '#888' }}>÷ 2 →</span>
            <span style={{ color: '#00eaff', fontWeight: 'bold' }}>2</span>
            <span style={{ color: '#888' }}>+</span>
            <span style={{ color: '#ffe600', fontWeight: 'bold' }}>1</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7em', marginBottom: '0.3em' }}>
            <span style={{ color: '#00eaff', fontWeight: 'bold' }}>2</span>
            <span style={{ color: '#888' }}>÷ 2 →</span>
            <span style={{ color: '#00eaff', fontWeight: 'bold' }}>1</span>
            <span style={{ color: '#888' }}>+</span>
            <span style={{ color: '#ffe600', fontWeight: 'bold' }}>0</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7em', marginBottom: '0.3em' }}>
            <span style={{ color: '#00eaff', fontWeight: 'bold' }}>1</span>
            <span style={{ color: '#888' }}>÷ 2 →</span>
            <span style={{ color: '#00eaff', fontWeight: 'bold' }}>0</span>
            <span style={{ color: '#888' }}>+</span>
            <span style={{ color: '#ffe600', fontWeight: 'bold' }}>1</span>
          </div>
          <div style={{ marginTop: '0.7em', color: '#ffe600', fontWeight: 'bold', fontSize: '1.1em' }}>1011</div>
        </div>
      </div>
      <div style={{ marginTop: '2em', textAlign: 'center' }}>
        <table style={{ margin: '0 auto', borderCollapse: 'collapse', fontFamily: 'monospace', fontSize: '1em', background: 'rgba(20,40,20,0.12)' }}>
          <thead>
            <tr style={{ color: '#39ff14' }}>
              <th style={{ padding: '0.5em', borderBottom: '1px solid #39ff14' }}>Letter</th>
              <th style={{ padding: '0.5em', borderBottom: '1px solid #39ff14' }}>ASCII (8-bit binary)</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(26)].map((_, i) => {
              const letter = String.fromCharCode(65 + i);
              const ascii = letter.charCodeAt(0);
              const binary = ascii.toString(2).padStart(8, '0');
              return (
                <tr key={letter}>
                  <td style={{ color: '#39ff14', fontWeight: 'bold', padding: '0.3em 0.8em', textShadow: '0 0 6px #39ff14' }}>{letter}</td>
                  <td style={{ color: '#00eaff', fontWeight: 'bold', padding: '0.3em 0.8em', textShadow: '0 0 6px #00eaff' }}>{binary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
