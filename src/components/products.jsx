// import /* React,  */ { /* useState,  */useEffect } from 'react'
// import { /* Navigate,  */useNavigate } from "react-router-dom"
import './styles.css';
// import { signIn } from '../scripts/signIn';
import { database } from '../scripts/database';
import { useCheckAuth } from '../scripts/checkAuth';
// import { getElementError } from '@testing-library/react'
// import ReactDOM from "react-dom"

function Products({ filter, cart, addToCart, products, setProducts }) {

  // const [results, setResults] = useState()
  // const [cart, addToCart] = useState([]);

  /* const navigate = useNavigate(); */

  /* useEffect(() => {  // getting info from database */
  // fetch data
  const useResultsFetch = async () => {
    let products = await database('products', 'GET', localStorage.getItem("accessToken"))
    await useCheckAuth(products)
    products = products.filter(value => value.type.includes(filter))
    setProducts(products);
  }
  useResultsFetch()
  // console.log("results", results)
  /* }, [navigate, filter, setResults]); */
  // console.log("results", results)

  function addToCartButton(e/* , index */) {
    // console.log("cart", cart)
    // console.log("e", e)
    const cartBody = {
      "qty": 1,
      "product": e
    }
    // console.log(cartbody)
    // console.log(cart)
    // if (cart.length > 0) {
    // let cartTemp = [] 
    for (const i in cart) {
      // console.log(cart[i]['product']['id'])
      // console.log(e['id'])
      if (cart[i]['product']['id'] === e['id']) {

        // console.log("cart[i]", cart[i])
        let cartTemp = cart[i]
        // console.log("cartTemp", cartTemp)
        // console.log("cart", cart)
        cartTemp['qty'] = cartTemp['qty'] + 1
        // console.log("cartTemp", cartTemp)
        // console.log(cart)
        cart.splice(i, 1);
        // console.log("cart", cart)
        // addToCart([...cart])
        addToCart([...cart, cartTemp])
        return
      }
    }
    // cart.splice(index, 1);
    // addToCart([...cart])
    addToCart([...cart, cartBody])
    /* } else {
      addToCart([...cart, cartbody])
    } */
    //  console.log(cart)
  }

  return (
    <>
      {products && products.map((e, index) => { // renders products   
        return (
          // results && results.map((e, index) => (
          <section key={`productsComponent${e['id']}`} className="cajaInicio">
            <img src={e['image']} alt={e['name']}></img><br></br>
            <p id="textoCorreoInvalido" className="textoCorreoInvalido">{e['name']}</p><br></br>
            <p id="textoCorreoInvalido" className="textoCorreoInvalido">Precio: {e['price']}</p><br></br>
            <div className="amountBox">
              {/* <p id={index} onClick={() => { setCounter(counter - 1); console.log(index) }}>{'<'}</p>
            <p id={`counter${index}`}>{counter}</p> */}

              <button
                onClick={() => { addToCartButton(e, index)/* ; console.log("cart", cart); console.log("e", e) */ }}
                className="checkoutBoxButtons"
              >Agregar al carrito</button>

            </div>
          </section>
        )
      })}
    </>
  )
}

export default Products;