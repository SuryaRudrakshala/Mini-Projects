import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <h1>📝 Instant Task Tracker</h1>
      <TaskTracker />
      <PomodoroTimer />
    </div>
  );
}

function TaskTracker() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [datetime, setDatetime] = useState('');
  const [priority, setPriority] = useState('medium');

  const addTask = () => {
    if (input.trim() !== '' && datetime !== '') {
      setTasks([
        ...tasks,
        { text: input, datetime, completed: false, priority }
      ]);
      setInput('');
      setDatetime('');
      setPriority('medium');
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const progress = tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;

  const priorityColors = {
    high: '#e74c3c',
    medium: '#f39c12',
    low: '#2ecc71'
  };

  return (
    <div className="task-tracker">
      <div className="task-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new task"
        />
        <input
          type="datetime-local"
          value={datetime}
          onChange={(e) => setDatetime(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span
              onClick={() => toggleTask(index)}
              style={{ color: priorityColors[task.priority] }}
            >
              {task.text}
            </span>
            <small>{new Date(task.datetime).toLocaleString()}</small>
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTimeLeft(25 * 60);
    setIsRunning(false);
  };

  return (
    <div className="pomodoro">
      <h2>⏱️ Pomodoro Timer</h2>
      <div className="timer-display">{formatTime(timeLeft)}</div>
      <button onClick={toggleTimer}>{isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default App;
