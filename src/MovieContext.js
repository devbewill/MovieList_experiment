import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    { name: "Goliath", price: 10, id: Math.floor(Math.random() * 1000001) },
    {
      name: "Game of Thrones",
      price: 12,
      id: Math.floor(Math.random() * 1000001),
    },
    { name: "Inception", price: 20, id: Math.floor(Math.random() * 1000001) },
    { name: "Shutter", price: 8, id: Math.floor(Math.random() * 1000001) },
    { name: "Avenger", price: 12, id: Math.floor(Math.random() * 1000001) },
    { name: "Ghost", price: 2, id: Math.floor(Math.random() * 1000001) },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
