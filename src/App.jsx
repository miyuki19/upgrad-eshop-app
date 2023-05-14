import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, SignIn, SignUp } from './pages/Index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
