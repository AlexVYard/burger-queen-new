import /* React,  */ { useState, useEffect } from 'react'
// import { /* Navigate,  */useNavigate } from "react-router-dom"
// import { postOrder } from '../scripts/postOrder';
import { database } from '../../../features/database';
import Header from './header';

function OfficeProducts() {

  const [editProduct, setEditProduct] = useState({})

  const [addProductBox, setAddProductBox] = useState(true)
  const [addProductForm, setAddProductForm] = useState(false)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [type, setType] = useState('')
  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState('Error')

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

  async function addProduct() {
    if (name === "" || price === "" || image === "" || type === "") {
      setError(true)
      setErrorText("Por favor rellene todos los campos")
      return
    }
    /* if (body["role"] === "") {
      setErrorPosition(true)
      setErrorPositionText('Selecciona una posición')
      return
    } else {
      setErrorPosition(false)
    } */
    await database('products', 'POST', localStorage.getItem("accessToken"), body)
    setAddProductForm(false)
    setAddProductBox(true)
    /* if (typeof result === 'object') {
      // navigate('/menu')
      setAddUserForm(false)
      setAddUserBox(true)
    } else {
      setError(true)
      setErrorText(result)
      // this.setState({ text: 'result' });
    } */
    // console.log(result)    
    reloadDatabase()
  }

  return (
    <>
      <Header />
      <main className="officeScreen">
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

                {error && <p
                  id="textoCorreoInvalido"
                  className="textoCorreoInvalido"
                  style={{ visibility: error ? 'visible' : 'hidden' }}
                >{errorText}<br></br><br></br></p>}

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
        {addProductBox && <section className="cartBox">
          {/* <img src={e['image']} alt={e['name']}></img> */}
          {/* <p
              id="textoCorreoInvalido"
              className="textoCorreoInvalido">
              Email: {e['email']}<br></br>
              Role: {e['role']}
            </p> */}
          <div className="amountBox">
            {/* <p id={index} onClick={() => { setCounter(counter - 1); console.log(index) }}>{'<'}</p>
            <p id={`counter${index}`}>{counter}</p> */}

            <button
              onClick={() => { setAddProductForm(true); setAddProductBox(false) }}
              className="blueButton"
            >Agregar productos</button>{/* <br></br><br></br> */}

            {/* <button
            onClick={() => { setEditUser(true); setUserData(false) }}
            className="checkoutBoxButtons"
          >Editar datos</button> */}

          </div>
        </section>}
        {addProductForm && <section className="cartBox">
          <input
            // data-testid="emailInput"
            type="text"
            placeholder="Nombre"
            onChange={(e) => setName(e.target.value)}
          ></input><br></br>

          {/* {error && <p
          id="textoCorreoInvalido"
          className="textoCorreoInvalido"
          style={{ visibility: error ? 'visible' : 'hidden' }}
        >{errorText}<br></br><br></br></p>} */}

          <input
            // data-testid="passwordInput"
            type="text"
            placeholder="Precio"
            onChange={(e) => setPrice(e.target.value)}
          ></input><br></br>

          <input
            // data-testid="passwordInput"
            type="text"
            placeholder="Link de imagen"
            onChange={(e) => setImage(e.target.value)}
          ></input><br></br>

          <select data-testid="select" defaultValue="" onChange={(e) => setType(e.target.value)}>
            <option value="">Selecciona una posición</option>
            <option data-testid="select-option" value="Desayuno">Desayuno</option>
            <option data-testid="select-option" value="Almuerzo ">Almuerzo</option>
          </select ><br></br>

          {error && <p
            id="textoCorreoInvalido"
            className="textoCorreoInvalido"
            style={{ visibility: error ? 'visible' : 'hidden' }}
          >{errorText}<br></br><br></br></p>}

          <button
            // data-testid="signInButton"
            onClick={() => { addProduct() }}
            className="blueButton"
          >Crear producto</button><br></br>

          <button
            // data-testid="signInButton"
            onClick={() => {/*  setError(true); setErrorText(); */ setAddProductForm(false); setAddProductBox(true) }}
            className="blueButton"
          >Cancelar</button>
        </section>}
      </main>
    </>
  )
}

export default OfficeProducts
