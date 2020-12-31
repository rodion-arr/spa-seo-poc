import logo from './logo.svg';
import './App.css';
import { Helmet } from "react-helmet";

function App () {
  return (
    <div className="App">
      <Helmet>
        <meta charset="utf-8" />
        <title>SPA site | SEO test </title>
        <meta name="description" content="SPA SEO test description" />
        <meta name="keywords" content="" />

        <meta name="application-name" content="SPA React test" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </Helmet>
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
