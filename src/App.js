import logo from './logo.svg';
import './App.css';
import AddForm1 from "./zad1/AddForm1";
import AddForm2 from "./zad2/AddForm2";
import AddForm3 from "./zad3/AddForm3";
import UserCredentials from './zad3/UserCredentials.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<AddNumberForm/>*/}
        {/*  <div className="form"><AddForm2/></div>*/}
        <AddForm3 userCredentials={UserCredentials}/>
      </header>
    </div>
  );
}

export default App;
