import /* React,  */{ useState/* , useEffect */ } from 'react'
// import { postOrder } from '../scripts/postOrder';
// import { database } from '../scripts/database';
// import MenuHeader from './menuHeader';
import Products from './products';
import Cart from './cart';

function Menu() {

  const [products, setProducts] = useState()
  const [cart, addToCart] = useState([])
  let [filter, setFilter] = useState('')

/*   const resultsFetch = async () => {
  results = await database('products', 'GET', localStorage.getItem("accessToken"))
  results = results.filter(value=>value.type.includes(filter))
  setResults(results);
  } */

  return (
    <>
      <div className="header">
        <li onClick={() => {setFilter('')}}>Todo</li>
        <li onClick={() => {setFilter('Desayuno')}}>Desayuno</li>
        <li onClick={() => {setFilter('Almuerzo')}}>Almuerzo y cena</li>
      </div>

      <main className="PantallaInicio">

        <Products filter={filter} products={products} setProducts={setProducts} cart={cart} addToCart={addToCart}/* menuToProducts={results}  */ />
        <Cart products={products} setProducts={setProducts} cart={cart} addToCart={addToCart} />

      </main>
    </>
  )
}

export default Menu
