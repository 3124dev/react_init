import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import Routes from './Routes';

function App() {
  return (
    <React.Fragment>
        <Router>
          <Routes isLoggedIn={true} />
        </Router>
      </React.Fragment>
  );
}

export default App;
