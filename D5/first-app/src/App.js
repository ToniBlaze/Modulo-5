import './App.css';
import { useState } from 'react';

import MyNav from './MyNav';
import MyFooter from './MyFooter';
import Welcome from './Welcome';
import BookFilter from './BookFilter';

function App() {
const [query, setQuery] = useState("")

function handleInputChange(event) {
  setQuery(event.target.value);
  console.log(event.target.value);
}
console.log(query);
  return (
    <div className="App">
      <MyNav onChange={handleInputChange} />
      <Welcome />
      <hr />
      <BookFilter query={query}/>
      <hr />
      <MyFooter />
    </div>
  );
}

export default App;
