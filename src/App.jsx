
import './App.css'
import Cart from './components/cart/cart'
import CreateAccount from './components/createAccount/createAccount'
import Item from './components/item/item'
import ItemShop from './components/itemShop/itemShop'
import Login from './components/login/login'
import Payment from './components/payment/payment'
import Start from './components/start/start'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
import Vouchers from './components/vouchers/vourches'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Start/>} />
      <Route path="/create-account" element={<CreateAccount/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="item-shop" element={<ItemShop/>} />
      <Route path="item" element={<Item/>} />
      <Route path="cart" element={<Cart/>} />
      <Route path="payment" element={<Payment/>} />
      <Route path="vouchers" element={<Vouchers/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
