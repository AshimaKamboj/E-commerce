import { BrowserRouter } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./Pages/Home";
function App() {
  return (
    <>
    <BrowserRouter>
    <Router>
      <Route path="/" Component={<Home/>}>

      </Route>
    </Router>
    </BrowserRouter>
    </>
  );
}

export default App;
