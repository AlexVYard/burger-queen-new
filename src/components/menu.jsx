import /* React,  */ { useState/* , useEffect  */} from 'react'
// import { postOrder } from '../scripts/postOrder';
/* import { database } from '../scripts/database';
import { useCheckAuth } from '../scripts/checkAuth'; */
// import MenuHeader from './menuHeader';
import Products from './products';
import Cart from './cart';
// import { useCheckAuth } from '../scripts/checkAuth';

function Menu() {

  const [products, setProducts] = useState()
  const [cart, addToCart] = useState([])
  let [filter, setFilter] = useState('')

  /* useEffect(() => {
    const resultsFetch = async () => {
      let products = await database('products', 'GET', localStorage.getItem("accessToken"))
      await useCheckAuth(products)
      products = products.filter(value => value.type.includes(filter))
      setProducts(products);
    }
    resultsFetch()
  }, [filter]) */

  return (
    <>
      <div className="header">
        <li onClick={() => { setFilter('') }}>Todo</li>
        <li onClick={() => { setFilter('Desayuno') }}>Desayuno</li>
        <li onClick={() => { setFilter('Almuerzo') }}>Almuerzo y cena</li>
      </div>

      <main className="PantallaInicio">

        <Products filter={filter} products={products} setProducts={setProducts} cart={cart} addToCart={addToCart}/* menuToProducts={results}  */ />
        <Cart products={products} setProducts={setProducts} cart={cart} addToCart={addToCart} />

      </main>
    </>
  )
}

export default Menu
