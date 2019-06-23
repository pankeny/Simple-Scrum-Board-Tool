import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <div className="App Site">
      <div className="Site-content">
        <div className="App-header">
          <Header />
        </div>
        <div className="main">
          <Dashboard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
