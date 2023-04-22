import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import MyNav from './MyNav';
import MyFooter from './MyFooter';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <MyFooter />
    </div>
  );
}

export default App;
