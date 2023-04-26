import './App.css';

import MyNav from './MyNav';
import MyFooter from './MyFooter';
import Welcome from './Welcome';
import LatestRelease from './LatestRelease';
import BookFilter from './BookFilter';

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <hr />
      <BookFilter />
      <hr />
      <LatestRelease />
      <MyFooter />
    </div>
  );
}

export default App;
