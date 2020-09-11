import React from "react";
import "./App.css";
//Import component
import { MovieProvider } from "./MovieContext";
import Nav from "./components/Nav";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav></Nav>
        <div className="container">
          <AddMovie></AddMovie>
          <MovieList></MovieList>
        </div>
      </div>
    </MovieProvider>
  );
}

export default App;
