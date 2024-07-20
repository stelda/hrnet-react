import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRouter from './AppRouter';
import './css/main.css';
import Header from "./components/Header";

function App() {
  return (
      <Router>
          <Header/>
          <AppRouter />
      </Router>
  );
}

export default App;

