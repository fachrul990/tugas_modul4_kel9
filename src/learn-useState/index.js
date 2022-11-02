import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function FavoriteMovie() {
  const [movies, setMovies] = useState([{ name: "Infinity War" }]);
  const [newMovies, setNewMovies] = useState("");

  const add = movie => setMovies([...movies, movie]);

  const remove = index => {
    setMovies([...movies.slice(0, index), ...movies.slice(index + 1)]);
  };

  const handleAddClick = () => {
    if (newMovies === "") {
      return;
    }
    add({ name: newMovies });
    setNewMovies("");
  };

  return (
    <>
      <div className="movies">
        {movies.map((movie, index) => {
          return <Movie movie={movie} onRemove={() => remove(index)} />;
        })}
      </div>
      <div className="add-movie">
        <input
          type="text"
          value={newMovies}
          onChange={event => setNewMovies(event.target.value)}
        />
        <button onClick={handleAddClick}>Tambah Movie</button>
      </div>
    </>
  );
}

function Movie({ movie, onRemove }) {
  return (
    <div className="movie">
      <span>{movie.name}</span>
      <button onClick={onRemove}>Hapus</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h2>My favorite Movie</h2>
      <FavoriteMovie />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;