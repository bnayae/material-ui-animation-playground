import React from 'react';
import './App.css';
import { Router } from 'react-router';
import { createBrowserHistory } from "history";
import Home from './components/Home';

const App: React.FC = () => {

  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;