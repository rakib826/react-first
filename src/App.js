import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Users from './Users';
import Counter from "./counter"

function App() {
  let [data, setData] = useState("welcome to Cyberspace")
  const updateData = () => {
    setData("rakibul hassan")
    alert(data)
  }
  console.log("render...")
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>Update Value</button>
      <br></br>
      <Counter />


    </div>
  );
}

export default App;
