import React, { useState } from 'react';
import './App.css';
import Tweet from './Tweet'
import axios from 'axios';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get('https://coursera-twitter-api.herokuapp.com/tweets')
      setData(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    console.log("here")
    fetchData()
    }
  )

  return (
<div style={{background: '#c0c0c0', padding: '30px'}}>
  {data.map (tweet => <Tweet key = {tweet.id} {...tweet} />)}
</div>  );
}

export default App;
