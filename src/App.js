import NavScroll from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AutoCarousel from './components/carousel';

function App() {
  return (
    <div className="App">
      <header>
        <NavScroll />
      </header>
      <div>
        <AutoCarousel />
      </div>
    </div>
  );
}

export default App;
