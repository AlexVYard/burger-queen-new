// import logo from './logo.svg';
// import { /* Link,  */Route, Routes, Router/* , useNavigate */ } from 'react-router-dom'
import {/*  BrowserRouter as Router,  */Routes, Route } from 'react-router-dom'
import Login from './modules/login/index.jsx';
import Menu from './modules/menu/index.jsx';
import Kitchen from './modules/kitchen/index.jsx';
import Office from './modules/office/index.jsx';
import OfficeProducts from './modules/office/components/products.jsx';
// import { onNavigate } from './lib/onNavigate.js';
// import './App.css';
import PrivateRoutes from './features/privateRoutes.jsx'
// import Product from './components/product.js';

function App() {
  /* const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/menu')
    }
  }, []) */
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<Menu />} path="/menu" exact />
        <Route element={<Kitchen />} path="/kitchen" exact />
        <Route element={<Office />} path="/officeWorkers" exact />
        <Route element={<OfficeProducts />} path="/officeProducts" exact />
      </Route>
      <Route element={<Login />} path="/login" />
      <Route element={<Login />} path="/" />
    </Routes>
  )
  // onNavigate('/');
  /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React today!
        </a>
      </header>
    </div>
  ); */
}

export default App;
