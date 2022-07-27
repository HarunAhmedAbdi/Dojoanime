import NavScroll from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Seasonal from './pages/seasonal';
import './Styles/app.scss';


function App() {
  return (
    <Router>
      <header>
        <NavScroll />
      </header>
      <div className='main-content'>
      <Switch>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/seasonal' element={<Seasonal/>} />
      <Route exact path='/schedule' element={<Home/>} />
      <Route exact path='/about' element={<Home/>} />
      <Route exact path='/404' element={<Home/>} />
      <Route exact path='/anime' element={<Home/>} />
      </Switch>
      </div>
    </Router>
 
  );
}

export default App;
