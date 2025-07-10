import { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from './components/About';
import Classes from "./components/Classes";
import ClassDetails from "./components/ClassDetails";
import Instructor from './components/Instructor';
import Events from './components/Events';

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
    <div>
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <ClassDetails />
      <Instructor />
      <Events />
    </div>
  );
}

export default App;
