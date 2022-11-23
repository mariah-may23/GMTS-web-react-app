import logo from './logo.svg';
import './App.css';
import StartingPage from "./fashionWeb";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/gmts/*" element={<StartingPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/
