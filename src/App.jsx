import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/itemListContainer.jsx';

function App() {
const customGreeting = "¡Hola! Bienvenido a nuestra tienda online.\n\nExplora nuestros productos.";

  return (
    <div className="App">
      <NavBar />
      <header className="App-header"> 
        <ItemListContainer greeting={customGreeting} />
      </header>
    </div>
  );
}

export default App;