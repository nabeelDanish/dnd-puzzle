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
    </div>
  );
}
