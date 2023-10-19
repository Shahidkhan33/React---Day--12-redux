import './App.css';
import NavBar from './components/navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <div className='container-fluid'>
        
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/cart' Component={Cart}></Route>
        </Routes>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;