import logo from './logo.svg';
import './App.css';
import Users from './Users';

function App() {
  let data = "welcome to Cyberspace"
  const demo = () => {
    data = "rakibul hassan"
    alert(data)
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={demo}>Click for alert!</button>
    </div>
  );
}

export default App;
