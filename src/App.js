import './App.css';
import Nav from './components/Nav.js';
import Location from './components/Location.js'
import Browse from './components/Browse.js'

function App() {
  return (
    <div className="Main">
      <Nav />
      <Location />
      <Browse />
    </div>
  );
}

export default App;
