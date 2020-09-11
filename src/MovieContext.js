import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    { name: "Harry Potter", price: 10, id: 12345 },
    { name: "Game of Thrones", price: 12, id: 12346 },
    { name: "Inception", price: 8, id: 12347 },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

// 1- creiamo il MovieProvider che serve a salvare lo state e passarlo ai component figli
// e il MovieContext
// 2- aggiungiamo al MovieContext.Provider una prop dove indichiamo quello che vogliamo sharare tra componenti
// 3- Wrappiamo l'app.js con il MovieProvider
// 4- nei singoli componenti importiamo useContext hook e il MovieContext.js
// 5- in ogni singolo componente dove ci serve lo state creiamo uno stato associandolo a MovieContext, per es:
// [movie, setMovie] = useContext(MovieContext);
