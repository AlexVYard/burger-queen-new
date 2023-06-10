import /* React,  */ { useState/* , useEffect */ } from 'react'
// import { /* Navigate,  */useNavigate } from "react-router-dom"
// import { postOrder } from '../scripts/postOrder';
// import { database } from '../../features/database';
// import { useCheckAuth } from '../scripts/checkAuth';
// import { logout } from '../../features/logout';
import Header from './components/header';
import Orders from './components/orders';

function Kitchen() {

  let [orders, setOrders] = useState()
  let [filter, setFilter] = useState('')
  // const [order, orderReady] = useState([])
  // const [readyButtonText, setReadyButtonText] = useState('Listo')
  // const [noText, setNoText] = useState(true)
  // const [readyButton, setReadyButton] = useState(false)

  return (
    <>
      <Header setFilter={setFilter} />

      <main className="kitchenScreen">
        <Orders filter={filter} orders={orders} setOrders={setOrders} /* cart={cart} addToCart={addToCart} */ />
      </main>
    </>
  )
}

export default Kitchen
