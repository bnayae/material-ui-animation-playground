import React from 'react';
import './App.css';
import { Router } from 'react-router';
import { createBrowserHistory } from "history";
import Layout from './components/Layout';

const App: React.FC = () => {

  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <div className="App">
        <Layout />
      </div>
    </Router>
  );
}

export default App;