import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import Products from "./Components/Products"
import Cart from "./Components/Cart"

function App() {
  return (
   <Fragment>
    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
   </Fragment>
  )
}

export default App
