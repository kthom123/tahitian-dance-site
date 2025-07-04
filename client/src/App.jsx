import { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import './App.css';


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Failed to fetch'));
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Navbar />
      <Hero />
      <h1>Tahitian Dance School</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
