import NavScroll from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Seasonal from './pages/seasonal';


function App() {
  return (
    <Router>
      <header>
        <NavScroll />
      </header>
      <Switch>
      <Route exact path='/home' element={<Home/>} />
      <Route exact path='/seasonal' element={<Seasonal/>} />
      <Route exact path='/schedule' element={<Home/>} />
      <Route exact path='/about' element={<Home/>} />
      <Route exact path='/404' element={<Home/>} />
      <Route exact path='/anime' element={<Home/>} />
      </Switch>
      <fouter>
        <h1>World</h1>
      </fouter>
    </Router>
 
  );
}

export default App;
