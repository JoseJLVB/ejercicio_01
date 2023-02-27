import logo from './logo.svg';
import './App.css';
import ComponentA from "./components/componenteA";

function App() {
  /* Creating an object called contactprueba. */
  const contact = {
    nombre: "Jose Luis",
    apellido: "Valcarcel Bravo",
    email: "josevalcarcel@entrearaucarias.com",
    conectado: true,
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <ComponentA contact={contact} />
      </header>
    </div>
  );
}

export default App;
