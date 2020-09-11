import React, { useState, useContext } from "react";
import { MovieContext } from "../MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [
      ...prevMovies,
      { name: name, price: price, id: Math.floor(Math.random() * 1001) },
    ]);
    setName("");
    setPrice("");
  };
  return (
    <form onSubmit={addMovie}>
      <input
        type="text"
        name="name"
        placeholder="title"
        value={name}
        onChange={updateName}
      ></input>
      <input
        type="text"
        name="price"
        placeholder="price"
        value={price}
        onChange={updatePrice}
      ></input>
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
