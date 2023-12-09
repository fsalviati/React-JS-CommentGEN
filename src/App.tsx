import React from 'react';
import './App.css';
import './styles/global-style.css';

import {Dashboard} from "./components/Dashboard/dashboard";
import {Header} from "./components/Header/header";

function App() {
  return (
    <div>
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
