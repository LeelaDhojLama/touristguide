import React from "react";
import './App.css';
import HomePage from "./pages/HomePage";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import VideoPlayerPage from "./pages/VideoPlayerPage";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/video" component={VideoPlayerPage}/>
          <Route path="" component={HomePage}/>
        </Switch>
      </Router>
  );
}

export default App;
