// ...existing imports...
import { useEffect } from 'react';
// Dynamic shell command lines for background
const shellLines = [
  <span><span className="shell-cmd">$ ls -la</span> <span className="shell-path">/mainframe/pods</span></span>,
  <span><span className="shell-cmd">$ cat</span> <span className="shell-path">access_fragment.txt</span></span>,
  <span><span className="shell-cmd">$ export</span> <span className="shell-var">CODE=0x4F2A</span></span>,
  <span><span className="shell-cmd">$ echo</span> <span className="shell-num">"26 22 28 21 25"</span></span>,
  <span><span className="shell-cmd">$ ping</span> <span className="shell-path">pod-beta</span></span>,
  <span><span className="shell-cmd">$ grep</span> <span className="shell-num">"fragment"</span> <span className="shell-path">/mainframe/logs</span></span>,
  <span><span className="shell-cmd">$ sudo</span> <span className="shell-cmd">reboot</span> <span className="shell-path">mainframe</span></span>,
  <span><span className="shell-cmd">$ tail -f</span> <span className="shell-path">/mainframe/puzzle.log</span></span>,
  <span><span className="shell-error">ERROR:</span> <span className="shell-comment">Access denied for pod-delta</span></span>,
  <span><span className="shell-cmd">$ whoami</span> <span className="shell-path">pod-epsilon</span></span>,
  <span><span className="shell-cmd">$ echo</span> <span className="shell-num">"Stability not reached"</span></span>,
];

function ShellBackground() {
  // Loop lines with random vertical offset for effect
  return (
    <div className="shell-bg">
      {Array.from({ length: 18 }).map((_, i) => (
        <div className="shell-line" key={i} style={{ top: `${i * 5}vh`, position: 'absolute', left: `${(i%2)*10+5}vw`, width: '90vw' }}>
          {shellLines[i % shellLines.length]}
        </div>
      ))}
    </div>
  );
}

import { useState } from 'react';
import './App.css';
import { PlayerSelect } from './pages/PlayerSelect';
import { ScenarioIntro } from './pages/ScenarioIntro';
import { GuessForm } from './pages/GuessForm';
import { BinaryStage } from './pages/BinaryStage';
import { CipherStage } from './pages/CipherStage';

const players = [
  {
    name: 'Pod Alpha',
    shown: 26,
    clue: 'What I add is exactly 8 more than what Pod Beta adds'
  },
  {
    name: 'Pod Beta',
    shown: 22,
    clue: 'What I add is exactly 11 less than Pod Gamma adds.'
  },
  {
    name: 'Pod Gamma',
    shown: 28,
    clue: 'What I add equals what Pod Delta adds plus 12.'
  },
  {
    name: 'Pod Delta',
    shown: 21,
    clue: 'What I add is 9 less than what Pod Alpha adds.'
  },
  {
    name: 'Pod Epsilon',
    shown: 25,
    clue: 'What I add is 6 more than what Pod Beta adds.'
  },
];

const finalNumbers = [79, 67, 84, 65, 76];

function FlickerDigits({ value }) {
  // Flickering green digits effect
  return (
    <span className="flicker">{value}</span>
  );
}

function FinalScreen() {
  return (
    <div className="card" style={{ textAlign: 'center', marginTop: '4em' }}>
      <h2 style={{ color: '#39ff14', fontWeight: 'bold', fontSize: '2.2em', textShadow: '0 0 10px #39ff14' }}>
        ACCESS GRANTED
      </h2>
      <div style={{ marginTop: '2em', color: '#ffe600', fontSize: '1.3em', fontWeight: 'bold' }}>
        Welcome to the Nexus.
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState('select');
  const [selected, setSelected] = useState(null);
  const [guesses, setGuesses] = useState(["", "", "", "", ""]);
  const [feedback, setFeedback] = useState("");
  const [showBinaryPage, setShowBinaryPage] = useState(false);
  const [showCipher, setShowCipher] = useState(false);
  const [binarySuccess, setBinarySuccess] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  // Handlers
  const handleSelect = (idx) => {
    setSelected(idx);
    setPage('intro');
  };
  const handleBack = () => {
    setSelected(null);
    setPage('select');
    setFeedback("");
    setGuesses(["", "", "", "", ""]);
  };
  const handleGuessChange = (idx, val) => {
    const newGuesses = [...guesses];
    newGuesses[idx] = val.replace(/[^0-9]/g, "");
    setGuesses(newGuesses);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (guesses.every((g, i) => Number(g) === finalNumbers[i])) {
      setFeedback("✅ Stability reached! Sequence revealed.");
      setTimeout(() => {
        setPage('binary');
      }, 5000);
    } else {
      setFeedback("Stability not reached — fragments require interlocking operations.");
    }
  };

  // BinaryStage success handler
  const handleBinarySuccess = () => {
    setBinarySuccess(true);
    setTimeout(() => {
      setShowCipher(true);
      setPage('cipher');
    }, 5000);
  };

  // CipherStage success handler
  const handleCipherSuccess = () => {
    setShowFinal(true);
    setPage('final');
  };

  // Page rendering
  return (
    <>
      <ShellBackground />
      {page === 'select' && <PlayerSelect onSelect={handleSelect} />}
      {page === 'intro' && (
        <>
          <ScenarioIntro playerIdx={selected} players={players} onBack={handleBack} />
          <GuessForm guesses={guesses} onGuessChange={handleGuessChange} onSubmit={handleSubmit} players={players} feedback={feedback} />
        </>
      )}
      {page === 'binary' && <BinaryStage onSuccess={handleBinarySuccess} />}
      {page === 'cipher' && <CipherStage onSuccess={handleCipherSuccess} />}
      {page === 'final' && <FinalScreen />}
    </>
  );
}
export default App;
