import /* React,  */ { useState, useEffect } from 'react'
import { /* Navigate,  */useNavigate } from "react-router-dom"
// import './styles.css';
// import { signIn } from '../scripts/signIn';
import { database } from '../../../../../features/database'

function AddWorkers() {

  let [users, setUsers] = useState()
  // const [cart, addToCart] = useState([]);
  // const [userData, setUserData] = useState({})
  // const [editUser, setEditUser] = useState({})
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

  return (
    <>
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
            className="blueButton"
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
          className="blueButton"
        >Crear usuario</button><br></br>

        <button
          // data-testid="signInButton"
          onClick={() => {/*  setError(true); setErrorText(); */ setAddUserForm(false); setAddUserBox(true) }}
          className="blueButton"
        >Cancelar</button>
      </section>}
    </>
  )
}

export default AddWorkers
