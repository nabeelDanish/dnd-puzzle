export function GuessForm({ guesses, onGuessChange, onSubmit, players, feedback }) {
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
            onChange={e => onGuessChange(i, e.target.value)}
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
        </div>
      ))}
      <button type="submit" style={{ marginTop: '1em' }}>
        Enter Access Code
      </button>
    </form>
  );
}
