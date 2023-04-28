import './App.css';

import MyNav from './MyNav';
import MyFooter from './MyFooter';
import Welcome from './Welcome';
import BookFilter from './BookFilter';

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <hr />
      <BookFilter />
      <hr />
      <MyFooter />
    </div>
  );
}

export default App;
