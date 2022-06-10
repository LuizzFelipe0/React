import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Será que react é bom? euheimm
        </p>
        <button onClick={() => setContador(contador + 1)}>+ 1</button>
       
        <button onClick={() => setContador(contador - 1)}>- 1</button>
       
       
        <p>Edit <code>src/App.js</code> and save to reload.</p>
      
        <p>{contador}</p>
    
      </header>
    </div>
  );
}

 export default App;