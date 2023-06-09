import /* React,  */ { useState, useEffect } from 'react'
// import { /* Navigate,  */useNavigate } from "react-router-dom"
// import { postOrder } from '../scripts/postOrder';
import { database } from '../../features/database';
// import { useCheckAuth } from '../scripts/checkAuth';
import { logout } from '../../features/logout';

function Kitchen() {

  let [orders, setOrders] = useState()
  let [filter, setFilter] = useState('')
  // const [order, orderReady] = useState([])
  // const [readyButtonText, setReadyButtonText] = useState('Listo')
  // const [noText, setNoText] = useState(true)
  // const [readyButton, setReadyButton] = useState(false)

  const readyButtonText = (status) => {
    if (status === 'pending') {
      return 'LISTO'
    }
    if (status === 'processed') {
      return 'ENTREGADO'
    }
    if (status === 'delivered') {
      return 'COMIDO'
    }
  }

  const body1 = { // body will be used by postOrder
    "status": "processed",
    "dateProcessed": new Date().toLocaleString()
  }

  const body2 = { // body will be used by postOrder
    "status": "delivered",
    "dateDelivered": new Date().toLocaleString()
  }

  useEffect(() => {  // getting info from database
    // fetch data
    const ordersFetch = async () => {
      let orders = await database('orders', 'GET', localStorage.getItem("accessToken"))
      orders = orders.filter(value => value.status.includes(filter))
      setOrders(orders);
      // console.log(results[0])
    }
    ordersFetch()

    // console.log("results", results)
  }, [filter]);

  async function updateDatabaseKitchen(e) {
    // setResults(false)
    if (e['status'] === 'pending') {
      await database(`orders/${e.id}`, 'PATCH', localStorage.getItem("accessToken"), body1)
      // console.log("processed")
    }
    if (e['status'] === 'processed') {
      await database(`orders/${e.id}`, 'PATCH', localStorage.getItem("accessToken"), body2)
      // console.log("delivered")
    }
    orders = await database('orders', 'GET', localStorage.getItem("accessToken"))
    setOrders(orders)
    return orders
  }

  return (
    <>
      <section className="header">

        <div className="leftHeader">
          <li onClick={() => { setFilter('') }}>Todo</li>
          <li onClick={() => { setFilter('pending') }}>Pendientes</li>
          <li onClick={() => { setFilter('processed') }}>Procesado</li>
          <li onClick={() => { setFilter('delivered') }}>Entregado</li>
        </div>

        <div className="rightHeader">
          <li onClick={() => { logout() }}>Logout</li>
        </div>

      </section>

      <main className="kitchenScreen">
        {orders && orders.map((e/* , index */) => { // renders products
          // readyButtonCall(e['status'])
          // console.log(e.id)
          return (
            // results && results.map((e, index) => (
            <section key={`kitchenScreenSection${e['id']}`} className="kitchenBox">
              <p
                id="textoCorreoInvalido"
                className="textoCorreoInvalido">
                STATUS: {e['status']}<br></br><br></br></p>

              {e['products'].map((products/* , index */) => {

                // console.log(products['product']['name'])
                return (
                  <>
                    {/* <img src={products['product']['image']} alt={products['product']['name']}></img> */}
                    <p
                      id="textoCorreoInvalido"
                      className="textoCorreoInvalido"
                    >{products['product']['name']} x{products['qty']}</p>
                  </>
                )
              })}<br></br>

              {/* <img src={e['image']} alt={e['name']}></img> */}
              <p
                id="textoCorreoInvalido"
                className="textoCorreoInvalido">
                LOGGED: {e['dataEntry']}<br></br>
                {/* {readyText && <p
                style={{ visibility: readyText ? 'visible' : 'hidden' }}
              >READY: {e['dateProcessed']}<br></br></p>} */}
                PROCESSED: {/* {noText && 'No'} */}{e['dateProcessed']}{/* {(e) => {readyText ? `${e['dateProcessed']}` : 'No'}} */}<br></br>
                DELIVERED: {e['dateDelivered']}</p><br></br>
              {/* <p id="textoCorreoInvalido" className="textoCorreoInvalido">STATUS: {e['status']}</p> */}
              <div className="amountBox">
                {/* <p id={index} onClick={() => { setCounter(counter - 1); console.log(index) }}>{'<'}</p>
            <p id={`counter${index}`}>{counter}</p> */}

                {/* readyButton(e) */}

                <button
                  // data-testid={`buttonid${e['id']}`}
                  // onload={readyButtonCall(e['status'])}
                  onClick={async () => {
                    await updateDatabaseKitchen(e)
                    // database(`orders/${e.id}`, 'PATCH', localStorage.getItem("accessToken"), body)
                    // resultsFetch()
                    // Kitchen()
                    // setResults(results)
                    // window.location.reload(false)
                  }}
                  className="blueButton"
                >{readyButtonText(e['status'])}</button>

              </div>
            </section>
          )
        })}
      </main>
    </>
  )
}

export default Kitchen
