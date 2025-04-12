import {Route, Routes} from "react-router-dom"
import './App.css'
import Home from './pages/Home.jsx'
import Product from "./pages/Product.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"

export default function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:productId' element={<Product/>}/>
        <Route exact path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

