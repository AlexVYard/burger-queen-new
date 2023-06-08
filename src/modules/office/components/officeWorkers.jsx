import /* React,  */ { useState, useEffect } from 'react'
import { /* Navigate,  */useNavigate } from "react-router-dom"
import './styles.css';
// import { signIn } from '../scripts/signIn';
import { database } from '../scripts/database';

function Workers() {

  let [users, setUsers] = useState()
  // const [cart, addToCart] = useState([]);
  // const [userData, setUserData] = useState({})
  const [editUser, setEditUser] = useState({})
  const [addUserBox, setAddUserBox] = useState(true)
  const [addUserForm, setAddUserForm] = useState(false)
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState("Error");
  const [errorPosition, setErrorPosition] = useState(false)
  const [errorPositionText, setErrorPositionText] = useState("Error");
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const navigate = useNavigate();

  async function reloadDatabase() {
    users = await database('users', 'GET', localStorage.getItem("accessToken"))
    setUsers(users)
  }

  useEffect(() => {  // getting info from database
    // fetch data
    const usersFetch = async () => {
      const users = await database('users', 'GET', localStorage.getItem("accessToken"))
      setUsers(users);
    }
    usersFetch()
    // console.log("results", results)
  }, [navigate]);
  // console.log("results", results)

  const body = { // body will be used by postOrder
    "email": email,
    "password": password,
    "role": role
  }

  async function addUser() {
    if (body["role"] === "") {
      setErrorPosition(true)
      setErrorPositionText('Selecciona una posición')
      return
    } else {
      setErrorPosition(false)
    }
    const user = await database('users', 'POST', localStorage.getItem("accessToken"), body)
    if (typeof user === 'object') {
      // navigate('/menu')
      setAddUserForm(false)
      setAddUserBox(true)
    } else {
      setError(true)
      setErrorText(user)
      // this.setState({ text: 'result' });
    }
    // console.log(result)    
    reloadDatabase()
  }

  const showEditUserForm = id => {
    /* setUserData(prevShownComments => ({
      ...prevShownComments,
      [id]: !prevShownComments[id]
    })) */
    setEditUser(showEditForm => ({
      ...showEditForm,
      [id]: !showEditForm[id]
    }))
  }

  async function acceptEditUser(e) {
    if (email === "") {
      setEmail(e.email)
    }
    if (password === "") {
      setPassword(e.password)
    }
    if (role === "") {
      setRole(e.role)
    }
    await database(`users/${e.id}`, 'PATCH', localStorage.getItem("accessToken"), body)
    showEditUserForm(e.id)
    reloadDatabase()
  }

  async function deleteUser(id) {
    /* const result =  */await database(`users/${id}`, 'DELETE', localStorage.getItem("accessToken"))
    // console.log(result)
    reloadDatabase()
  }

  return (
    <>
      {users && users.map((e/* , index */) => { // renders products
        const roleValue = () => {
          if (e['role'] === 'waiter') return 'Mesero'
          if (e['role'] === 'chef') return 'Cocinero'
          if (e['role'] === 'admin') return 'Administrador'
        }
        /* const selectedRole = () => {
          if (e['role'] === 'waiter') {return true }
          if (e['role'] === 'chef') return true
          if (e['role'] === 'admin') return true
        } */
        return (
          // results && results.map((e, index) => (
          <section className="officeBox" key={e.id}>

            {editUser[e.id] ? null : <>
              <p
                id="textoCorreoInvalido"
                className="textoCorreoInvalido">
                Email: {e['email']}<br></br>
                Role: {roleValue()}
              </p><br></br>

              <button
                onClick={() => { showEditUserForm(e.id)/* setEditUser(e.id); setUserData(e.id)  */ }}
                /* {...editUser === e ? true : false} */
                className="checkoutBoxButtons"
              >Editar datos</button><br></br>

              <button
                onClick={() => { deleteUser(e.id) }}
                className="checkoutBoxButtons"
              >Eliminar usuario</button></>}

            {/* <div className="amountBox"> */}
            {/* <p id={index} onClick={() => { setCounter(counter - 1); console.log(index) }}>{'<'}</p>
            <p id={`counter${index}`}>{counter}</p> */}

            {editUser[e.id] ? <><input
              // data-testid="emailInput"
              type="text"
              placeholder={'Nuevo email'}
              defaultValue={e['email']}
              onChange={(e) => setEmail(e.target.value)/*  onChange(e.target.value) */}
            ></input><br></br>

              {/* {error && <p
                id="textoCorreoInvalido"
                className="textoCorreoInvalido"
                style={{ visibility: error ? 'visible' : 'hidden' }}
              >{errorText}<br></br><br></br></p>} */}

              <input
                // data-testid="passwordInput"
                type="password"
                placeholder="Nueva contraseña"
                onChange={(e) => setPassword(e.target.value)}
              ></input><br></br>

              {/* <input
                // data-testid="passwordInput"
                type="text"
                placeholder={`Nuevo rol`}
                defaultValue={e['role']}
                onChange={(e) => setRole(e.target.value)}
              ></input><br></br> */}

              <select data-testid="select" defaultValue="" onChange={(e) => setRole(e.target.value)}>
                <option value="">Selecciona una posición</option>
                <option data-testid="select-option" value="waiter">Mesero</option>
                <option data-testid="select-option" value="chef">Cocinero</option>
                <option data-testid="select-option" value="admin">Administrador</option>
              </select ><br></br>

              <button
                onClick={() => { acceptEditUser(e)/* ; setEmail(e['email']) *//* database(`users/${e.id}`, 'PATCH', localStorage.getItem("accessToken"), body) *//* ; setError(true) */ }}
                className="checkoutBoxButtons"
              >Aceptar</button><br></br>

              <button
                onClick={() => { showEditUserForm(e.id)/* setEditUser(false); setUserData(true) */ }}
                className="checkoutBoxButtons"
              >Cancelar</button></> : null}

            {/* </div> */}
          </section>
        )
      })}
      {addUserBox && <section className="cartBox">
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
            onClick={() => { setAddUserForm(true); setAddUserBox(false) }}
            className="checkoutBoxButtons"
          >Agregar trabajadores</button>{/* <br></br><br></br> */}

          {/* <button
            onClick={() => { setEditUser(true); setUserData(false) }}
            className="checkoutBoxButtons"
          >Editar datos</button> */}

        </div>
      </section>}

      {addUserForm && <section className="cartBox">
        <input
          // data-testid="emailInput"
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        ></input><br></br>

        {error && <p
          id="textoCorreoInvalido"
          className="textoCorreoInvalido"
          style={{ visibility: error ? 'visible' : 'hidden' }}
        >{errorText}<br></br><br></br></p>}

        <input
          // data-testid="passwordInput"
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        ></input><br></br>

        {/* <input
          // data-testid="passwordInput"
          type="text"
          placeholder="Rol"
          onChange={(e) => setRole(e.target.value)}
        ></input><br></br> */}

        <select data-testid="select" defaultValue="" /* value={role} */ onChange={(e) => setRole(e.target.value)}>
          <option value="">Selecciona una posición</option>
          <option data-testid="select-option" value="waiter">Mesero</option>
          <option data-testid="select-option" value="chef ">Cocinero</option>
          <option data-testid="select-option" value="admin">Administrador</option>
        </select ><br></br>

        {errorPosition && <p
          id="textoCorreoInvalido"
          className="textoCorreoInvalido"
          style={{ visibility: errorPosition ? 'visible' : 'hidden' }}
        >{errorPositionText}<br></br><br></br></p>}

        <button
          // data-testid="signInButton"
          onClick={() => { addUser() }}
          className="checkoutBoxButtons"
        >Crear usuario</button><br></br>

        <button
          // data-testid="signInButton"
          onClick={() => {/*  setError(true); setErrorText(); */ setAddUserForm(false); setAddUserBox(true) }}
          className="checkoutBoxButtons"
        >Cancelar</button>
      </section>}
    </>
  )
}

export default Workers
