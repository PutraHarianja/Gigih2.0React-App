import logo from './logo.svg';
import './App.css';
import axios from "axios";

const giphy_secret_key = process.env.REACT_APP_GIPHY_KEY

function retrieveData() {
    console.log("retrieve data start")
    axios.get('https://api.giphy.com/v1/gifs/trending', {
      params: {
        api_key: giphy_secret_key
      }
    }).then((response) => console.log(response.data)).catch((err)=> console.log(err.data));
}

retrieveData()

console.log(process.env.REACT_APP_COUNT)

function App() {
  return (
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
  );
}

export default App;
