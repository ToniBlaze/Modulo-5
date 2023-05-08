import './App.css';
import { useState } from 'react';

import MyNav from './MyNav';
import MyFooter from './MyFooter';
import Welcome from './Welcome';
import BookFilter from './BookFilter';

import Horror from "./categorie/horror.json";

function App() {
  const [query, setQuery] = useState("")

  function handleInputChange(value) {
    setQuery(value);
console.log(value);
  }


  // Creazione del nuovo array di libri filtrati in base al testo di ricerca
  const filteredBooks = Horror.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="App">
      <MyNav onQueryChange={handleInputChange} />
      <Welcome />
      <hr />
      <BookFilter books={filteredBooks} />
      <hr />
      <MyFooter />
    </div>
  );
}

export default App;
