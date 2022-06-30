import './App.css';
import { useState } from 'react';
import NavBar from './NavBar';
import MainMint from "./MainMint"

function App() {
  const [accounts, setAccounts] = useState([]);

    return (
      <div className="movingBackground">
        <NavBar accounts={accounts} setAccounts={setAccounts} />
        <MainMint accounts={accounts} setAccounts={setAccounts} />
      </div>
  // <div className="overlay">
  // </div>
  )
}

        {/* <div className="App"> */}
    {/* </div>
  <div className="movingBackground"></div> */}

export default App;
