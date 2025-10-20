import React from "react";

export function CipherStage() {
  // Letters for vertical alignment
  const word1 = "OCTAL";
  const word2 = "BGQUD";
  return (
    <div className="card" style={{ textAlign: "center", marginTop: "3em" }}>
      <h2 style={{ color: "#ff3939", fontWeight: "bold", fontSize: "2em", letterSpacing: "0.2em", textShadow: "0 0 10px #ff3939" }}>
        NEURAL FIREWALL: ACTIVE
      </h2>
      <div style={{ margin: "2em auto", fontSize: "1.2em", color: "#39ff14", fontWeight: "bold" }}>
        Provide Key to break firewall
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2em" }}>
        <div style={{ display: "flex", gap: "2em" }}>
          {word1.split("").map((ch, i) => (
            <span key={i} style={{ fontSize: "2.5em", fontWeight: "bold", color: "#39ff14", textShadow: "0 0 8px #39ff14", letterSpacing: "0.1em", minWidth: "1.5em", textAlign: "center" }}>{ch}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: "2em", marginTop: "0.5em" }}>
          {word2.split("").map((ch, i) => (
            <span key={i} style={{ fontSize: "2.5em", fontWeight: "bold", color: "#ffe600", textShadow: "0 0 8px #ffe600", letterSpacing: "0.1em", minWidth: "1.5em", textAlign: "center" }}>{ch}</span>
          ))}
        </div>
      </div>
      {/* Vigenère cipher table */}
      <div style={{ marginTop: '2.5em', overflowX: 'auto', textAlign: 'center' }}>
        <table style={{ margin: '0 auto', borderCollapse: 'collapse', fontFamily: 'monospace', fontSize: '0.95em', background: 'rgba(20,40,20,0.12)', boxShadow: '0 0 12px #222', borderRadius: '8px' }}>
          <thead>
            <tr>
              <th style={{ background: '#222', color: '#ffe600', padding: '0.3em 0.7em', border: '1px solid #333', position: 'sticky', left: 0 }}> </th>
              {[...Array(26)].map((_, i) => (
                <th key={i} style={{ background: '#222', color: '#39ff14', padding: '0.3em 0.7em', border: '1px solid #333' }}>{String.fromCharCode(65 + i)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(26)].map((_, row) => (
              <tr key={row}>
                <th style={{ background: '#222', color: '#ffe600', padding: '0.3em 0.7em', border: '1px solid #333', position: 'sticky', left: 0 }}>{String.fromCharCode(65 + row)}</th>
                {[...Array(26)].map((_, col) => (
                  <td key={col} style={{ color: '#39ff14', padding: '0.3em 0.7em', border: '1px solid #333', background: row === col ? '#222' : 'transparent', fontWeight: row === col ? 'bold' : 'normal' }}>
                    {String.fromCharCode(65 + ((row + col) % 26))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
