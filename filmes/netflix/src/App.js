import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import './App.css';
import Home from './Pages/home'
import Planos from './Pages/planos';
import Sobre from './Pages/sobre';
//import Detalhes from './Pages/detalhes';

export default function App() {
  return (
    <Router>
      <div className="App">
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
            </a>


          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li> <Link to='/' class="nav-link px-2 link-secondary">Home</Link> </li>
            <li> <Link to='/planos'  class="nav-link px-2 link-dark">Planos</Link></li>
            <li> <Link to='/sobre/Leo' class="nav-link px-2 link-dark">Sobre</Link></li>
          </ul>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/planos' element={<Planos/>}></Route>
            <Route path='/sobre/:name' element={<Sobre/>}></Route>
            {/* <Route path='/detalhes/:filmenome' element={<Detalhes/>}></Route> */}
            <Route path='*' element={<h1>Página não encontrada</h1>} />
          </Routes>
          </header>
      </div>
    </Router>



  );
}


