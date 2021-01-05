import {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import { Helmet } from "react-helmet";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App () {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home () {
  const [seoReady, setSeoReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSeoReady(true);
    }, 1000)
  }, [])

  let seoComponent = null;
  if (seoReady) {
    seoComponent = <Helmet>
    <meta charset="utf-8" />
    <title>SPA site | SEO test </title>
    <meta name="description" content="SPA SEO test description" />
    <meta name="keywords" content="" />

    <meta name="application-name" content="SPA React test" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  </Helmet>
  }

  return (
    <>
      {seoComponent}
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
    </>
  );
}

function Test () {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <title>TEST</title>
        <meta name="description" content="TEST | SPA SEO test description" />
        <meta name="keywords" content="" />

        <meta name="application-name" content="SPA React test page" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TEST!!!!
    </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React TEST
    </a>
      </header>
    </>
  );
}

export default App;
