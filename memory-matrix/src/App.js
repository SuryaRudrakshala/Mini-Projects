import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <h1>Memorize Matrix :)</h1>
      <MemoryMatrix key={Date.now()} gridSize={5} />
    </div>
  );
}

function MemoryMatrix({ gridSize }) {
  const [highlighted, setHighlighted] = useState([]);
  const [userClicks, setUserClicks] = useState([]);
  const [showSequence, setShowSequence] = useState(true);
  const [round, setRound] = useState(1);
  const [status, setStatus] = useState('Memorize the pattern...');

  useEffect(() => {
    generateSequence();
  }, [round]);

  function generateSequence() {
    setUserClicks([]);
    setShowSequence(true);
    const count = round + 2;
    const totalSquares = gridSize * gridSize;
    const sequence = [];
    while (sequence.length < count) {
      const rand = Math.floor(Math.random() * totalSquares);
      if (!sequence.includes(rand)) sequence.push(rand);
    }
    setHighlighted(sequence);
    setTimeout(() => {
      setShowSequence(false);
      setStatus('Now select all the correct squares!');
    }, 1000 + count * 400);
  }

  function handleClick(index) {
    if (showSequence || userClicks.includes(index)) return;
    const newClicks = [...userClicks, index];
    setUserClicks(newClicks);
    if (!highlighted.includes(index)) {
      setStatus('Wrong! Try again from round 1.');
      setTimeout(() => setRound(1), 1000);
      return;
    }
    if (newClicks.filter(i => highlighted.includes(i)).length === highlighted.length) {
      setStatus('Great job! Get ready for next round.');
      setTimeout(() => setRound(round + 1), 1000);
    }
  }

  function resetGame() {
    // Force re-mounting the component for a complete reset
    window.location.reload();
  }

  function renderGrid() {
    const totalSquares = gridSize * gridSize;
    const squares = [];
    for (let i = 0; i < totalSquares; i++) {
      const isHighlighted = showSequence && highlighted.includes(i);
      const isClicked = !showSequence && userClicks.includes(i);
      squares.push(
        <div
          key={i}
          className={`matrix-square ${isHighlighted ? 'highlight' : ''} ${isClicked ? 'clicked' : ''}`}
          onClick={() => handleClick(i)}
        ></div>
      );
    }
    return squares;
  }

  return (
    <div>
      <h2>Round: {round}</h2>
      <p>{status}</p>
      <div className="matrix-grid" style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
        {renderGrid()}
      </div>
      <button onClick={resetGame} className="reset-button">Restart Game</button>
    </div>
  );
}

export default App;
