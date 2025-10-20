import React, { useState } from "react";

export function CipherStage({ onSuccess }) {
  // Letters for vertical alignment
  const word1 = "OCTAL";
  const word2 = "BGQUD";
  const [keyInputs, setKeyInputs] = useState(["", "", "", "", ""]);
  const [resultMsg, setResultMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyInputs.join("") === "NEXUS") {
      setResultMsg("✅ Firewall Breached. Access Granted.");
      setSuccess(true);
      setTimeout(() => {
        if (onSuccess) onSuccess();
      }, 5000);
    } else {
      setResultMsg("❌ Incorrect key. Try again.");
    }
  };

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
      {/* Guess boxes for NEXUS */}
      {resultMsg && (
        <div style={{ marginTop: '1em', color: resultMsg.startsWith('✅') ? '#39ff14' : '#ff3939', fontWeight: 'bold', fontSize: '1.1em' }}>{resultMsg}</div>
      )}
      <form onSubmit={handleSubmit} style={{ marginTop: '1em', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7em' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.7em' }}>
          {keyInputs.map((val, idx) => (
            <input
              key={idx}
              type="text"
              value={val}
              onChange={e => {
                const arr = [...keyInputs];
                arr[idx] = e.target.value.replace(/[^A-Za-z]/g, '').toUpperCase().slice(0, 1);
                setKeyInputs(arr);
                setResultMsg('');
              }}
              maxLength={1}
              style={{
                width: '2.5em',
                height: '2.5em',
                fontSize: '1.5em',
                textAlign: 'center',
                color: '#39ff14',
                background: '#111',
                border: '2px solid #39ff14',
                borderRadius: '8px',
                boxShadow: '0 0 8px #39ff1444',
                fontWeight: 'bold',
                outline: 'none',
              }}
            />
          ))}
        </div>
        <button type="submit" style={{
          marginTop: '1em',
          fontSize: '1.1em',
          background: '#222',
          color: '#39ff14',
          border: '1px solid #39ff14',
          borderRadius: '6px',
          padding: '0.5em 1.2em',
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 0 8px #39ff1444',
        }}>
          Submit
        </button>
      </form>
    </div>
  );
}
