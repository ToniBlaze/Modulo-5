import './App.css';

import MyNav from './MyNav';
import MyFooter from './MyFooter';
import Welcome from './Welcome';
import LatestRelease from './LatestRelease';

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <LatestRelease />
      <MyFooter />
    </div>
  );
}

export default App;
