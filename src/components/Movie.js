import React, { useState, useContext } from "react";

const Movie = ({ name, price, id }) => {
  return (
    <div className="item shadow">
      <h6>{id}</h6>
      <h3>{name}</h3>
      <p>{price}€</p>
    </div>
  );
};

export default Movie;
