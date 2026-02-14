import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/home'
import { About } from './Pages/about'
import { Cart } from './Pages/cart'
import { Contact } from './Pages/contact'
import { Login } from './Pages/login'
import { Payment } from './Pages/payment'
import { Products } from './Pages/products'
import { Profile } from './Pages/profile'
import { Register } from './Pages/registration'
import { Transaction } from './Pages/transaction'
import { Layout } from './Layout'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/registration" element={<Register/>}/>
            <Route path="/transaction" element={<Transaction/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
