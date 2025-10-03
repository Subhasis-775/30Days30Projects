import { useState } from 'react'
import './App.css'

function App() {
  let [color,setColor]=useState("#ffffff");
  const colourSet=()=>{
    let chars="0123456789ABCDEF";
    let newColor='#';
    for(let i=0;i<6;i++){
      newColor+=chars.charAt(Math.floor(Math.random()*chars.length));
    }
    setColor(newColor);
  }
  return (
      <div  className="App"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color,
        transition: "background-color 0.5s ease",
      }}>
        <button onClick={colourSet}  style={{
          padding: "12px 24px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#fff",
          color:"black"
        }}>Generate random color</button>
      </div>
  )
}

export default App;
