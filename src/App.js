import React from 'react';
import './App.css';
import Tweet from './Tweet'
import axios from 'axios';


function App() {
  return (
    <Tweet text = 'passed down text' author ='Paul Mahooney' date='Texas'/>
  );
}

export default App;
