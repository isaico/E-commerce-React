// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import './components/NavBar.css';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <div className="App" >

      <NavBar />
    
      <ItemListContainer greeting=" Seccion de items a modificar"/>


    </div>
  );
}

export default App;
