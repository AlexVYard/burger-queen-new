import /* React,  */ { useState/* , useEffect  */} from 'react'
// import { postOrder } from '../scripts/postOrder';
/* import { database } from '../scripts/database';
import { useCheckAuth } from '../scripts/checkAuth'; */
// import MenuHeader from './menuHeader';
import Products from './components/products'
import Cart from './components/cart';
// import { useCheckAuth } from '../scripts/checkAuth';
import { logout } from '../../features/logout';

function Menu() {

  const [products, setProducts] = useState()
  const [cart, addToCart] = useState([])
  let [filter, setFilter] = useState('')

  return (
    <>
      <div className="header">
        <li onClick={() => { setFilter('') }}>Todo</li>
        <li onClick={() => { setFilter('Desayuno') }}>Desayuno</li>
        <li onClick={() => { setFilter('Almuerzo') }}>Almuerzo y cena</li>
        <li onClick={() => { logout() }}>Logout</li>
      </div>

      <main className="PantallaInicio">

        <Products filter={filter} products={products} setProducts={setProducts} cart={cart} addToCart={addToCart}/* menuToProducts={results}  */ />
        <Cart products={products} setProducts={setProducts} cart={cart} addToCart={addToCart} />

      </main>
    </>
  )
}

export default Menu
