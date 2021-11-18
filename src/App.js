//CSS
import "./App.css";
import "./components/NavBar.css";
import "./components/Item.css"
//Components
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() { 

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />

    </div>
  );
}

export default App;
