import /* React,  */ { useState, useEffect } from 'react'
// import { /* Navigate,  */useNavigate } from "react-router-dom"
// import { postOrder } from '../scripts/postOrder';
import { database } from '../../../../../features/database';
// import Header from './header';

function Products() {

  const [editProduct, setEditProduct] = useState({})

  // const [addProductBox, setAddProductBox] = useState(true)
  // const [addProductForm, setAddProductForm] = useState(false)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [type, setType] = useState('')
  // const [error, setError] = useState(false)
  // const [errorText, setErrorText] = useState('Error')

  let [products, setProducts] = useState()

  async function reloadDatabase() {
    products = await database('products', 'GET', localStorage.getItem("accessToken"))
    setProducts(products)
  }

  useEffect(() => {  // getting info from database
    // fetch data
    const productsFetch = async () => {
      const produtcs = await database('products', 'GET', localStorage.getItem("accessToken"))
      setProducts(produtcs);
    }
    productsFetch()
    // console.log("results", results)
  }, [setProducts]);
  // console.log("results", results)

  const showEditProductForm = id => {
    /* setUserData(prevShownComments => ({
      ...prevShownComments,
      [id]: !prevShownComments[id]
    })) */
    setEditProduct(showEditForm => ({
      ...showEditForm,
      [id]: !showEditForm[id]
    }))
  }

  async function acceptEditProduct(e) {
    if (name === "") {
      setName(e.name)
    }
    if (price === "") {
      setPrice(e.price)
    }
    if (image === "") {
      setImage(e.image)
    }
    if (type === "") {
      setType(e.type)
    }
    await database(`products/${e.id}`, 'PATCH', localStorage.getItem("accessToken"), body)
    showEditProductForm(e.id)
    reloadDatabase()
  }

  async function deleteProduct(id) {
    /* const result =  */await database(`products/${id}`, 'DELETE', localStorage.getItem("accessToken"))
    // console.log(result)
    reloadDatabase()
  }

  const body = { // body will be used by postOrder
    "name": name,
    "price": price,
    "image": image,
    "type": type,
  }

  return (
    <>
      {products && products.map((e) => { // renders products
        /* const typeValue = () => {
          if (e['type'] === 'Desayuno') return 'Mesero'
          if (e['type'] === 'Almuerzo') return 'Cocinero'
        } */
        return (
          // results && results.map((e, index) => (
          <section key={`officeProductsComponent${e['id']}`} className="cajaInicio">
            {editProduct[e.id] ? null : <>
              <p id="textoCorreoInvalido" className="textoCorreoInvalido">Imagen:</p><br></br>
              <img src={e['image']} alt={e['name']}></img><br></br>
              <p id="textoCorreoInvalido" className="textoCorreoInvalido">Nombre: {e['name']}</p><br></br>
              <p id="textoCorreoInvalido" className="textoCorreoInvalido">Precio: {e['price']}</p><br></br>
              <p id="textoCorreoInvalido" className="textoCorreoInvalido">Tipo: {e['type']}</p><br></br>

              {/* <div className="amountBox"> */}

              <button
                onClick={() => { showEditProductForm(e.id) }}
                className="blueButton"
              >Editar datos</button><br></br>
              <button
                onClick={() => { deleteProduct(e.id) }}
                className="redButton"
              >Eliminar producto</button>

              {/* </div> */}</>}

            {editProduct[e.id] ? <><input
              // data-testid="emailInput"
              type="text"
              placeholder="Nombre"
              defaultValue={e['name']}
              onChange={(e) => setName(e.target.value)}
            ></input><br></br>

              <input
                // data-testid="passwordInput"
                type="text"
                placeholder="Precio"
                defaultValue={e['price']}
                onChange={(e) => setPrice(e.target.value)}
              ></input><br></br>

              <input
                // data-testid="passwordInput"
                type="text"
                placeholder="Link de imagen"
                defaultValue={e['image']}
                onChange={(e) => setImage(e.target.value)}
              ></input><br></br>

              <select data-testid="select" defaultValue="" onChange={(e) => setType(e.target.value)}>
                <option value="">Selecciona una posición</option>
                <option data-testid="select-option" value="Desayuno">Desayuno</option>
                <option data-testid="select-option" value="Almuerzo">Almuerzo</option>
              </select ><br></br>

              {/* {error && <p
                id="textoCorreoInvalido"
                className="textoCorreoInvalido"
                style={{ visibility: error ? 'visible' : 'hidden' }}
              >{errorText}<br></br><br></br></p>} */}

              <button
                // data-testid="signInButton"
                onClick={() => { /* setName(e['name']); setPrice(e['price']); setImage(e['image']);  */acceptEditProduct(e) }}
                className="blueButton"
              >Aceptar</button><br></br>

              <button
                // data-testid="signInButton"
                onClick={() => {/*  setError(true); setErrorText(); */ showEditProductForm(e.id) }}
                className="blueButton"
              >Cancelar</button></> : null}
          </section>
        )
      })}
    </>
  )
}

export default Products
