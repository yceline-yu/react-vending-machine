import { BrowserRouter, Route } from "react-router-dom"
import VendingMachine from "./VendingMachine"
import './App.css';
import SnackOne from "./SnackOne";
import SnackTwo from "./SnackTwo";
import SnackThree from "./SnackThree";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/"><VendingMachine /></Route>
      <Route exact path="/snack1"><SnackOne /></Route>
      <Route exact path="/snack2"><SnackTwo /></Route>
      <Route exact path="/snack3"><SnackThree /></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
