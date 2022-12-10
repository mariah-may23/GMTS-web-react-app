import logo from './logo.svg';
import './App.css';
import StartingPage from "./fashionWeb";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import PublicProfile from "./fashionWeb/public-profile";


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<StartingPage/>}/>
            <Route path="/*" element={<StartingPage/>}/>
            <Route path="/profile/*" element={<PublicProfile/>}/>
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
