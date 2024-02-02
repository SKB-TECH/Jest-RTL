import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Great} from "./components/great/great";
import Second from "./components/hello/Hellos";

function App() {
  return (
    <div className="App">
     <Great/>
      <Second name={"Benjamin"}/>
    </div>
  );
}

export default App;
