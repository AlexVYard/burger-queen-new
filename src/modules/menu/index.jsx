import /* React,  */ { useState/* , useEffect  */ } from 'react'
// import { postOrder } from '../scripts/postOrder';
/* import { database } from '../scripts/database';
import { useCheckAuth } from '../scripts/checkAuth'; */
// import MenuHeader from './menuHeader';
import Products from './components/products'
import Cart from './components/cart';
// import { useCheckAuth } from '../scripts/checkAuth';
import { logout } from '../../features/logout';
// import Header from './components/header';

function Menu() {

  const [products, setProducts] = useState()
  const [cart, addToCart] = useState([])
  let [filter, setFilter] = useState('')

  return (
    <>
      <section className="header">

        <div className="leftHeader">
          <li onClick={() => { setFilter('') }}>Todo</li>
          <li onClick={() => { setFilter('Desayuno') }}>Desayuno</li>
          <li onClick={() => { setFilter('Almuerzo') }}>Almuerzo y cena</li>
        </div>

        <div className="rightHeader">
          <li onClick={() => { logout() }}>Logout</li>
        </div>

      </section>
      {/* <Header filter={filter} setFilter={setFilter} /> */}

      <main className="PantallaInicio">

        <Products filter={filter} products={products} setProducts={setProducts} cart={cart} addToCart={addToCart}/* menuToProducts={results}  */ />
        <Cart products={products} setProducts={setProducts} cart={cart} addToCart={addToCart} />

      </main>
    </>
  )
}

export default Menu
