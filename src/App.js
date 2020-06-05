import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component = {Homepage}/>
      </Router>
    </div>
  );
}

export default App;
