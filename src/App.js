import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Details from "./application/details-component";
// import "./vendors/bootstrap.min.css"

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/details" element={<Details/>}/>
          </Routes>

        </div>
      </BrowserRouter>
  );
}
export default App;