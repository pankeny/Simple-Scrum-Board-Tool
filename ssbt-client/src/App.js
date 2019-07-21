import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from "./components/Project/AddProject";

function App() {
  return (
    <Router>
      <div className="App Site">
        <div className="Site-content">
          <div className="App-header">
            <Header />
          </div>
          <div className="main">
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/addProject" component={AddProject} />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
