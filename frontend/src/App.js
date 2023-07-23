import { useState } from 'react';
import axios from "axios"
import './App.css';

function App() {
  const [data, setState]=useState("");

  const  handleClick= async (e) =>{
    const response = await axios.get("http://localhost:4000/api/getdata")
    console.log(response.data); setState(response.data)
  }
  return (
      <div>
        <h1>{data}</h1>
        <button onClick={handleClick}>Click Me</button>
      </div>
    )
}

export default App;