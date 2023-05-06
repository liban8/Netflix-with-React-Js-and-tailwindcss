import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Browse from './pages/Browse'
import Homel from './pages/Homel'
import Lists from './pages/Lists'
import Login from './pages/Login'
import Signup from './pages/Signup'
function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homel/>} />
      <Route path='/browser' element={<Browse/>} />
      <Route path='lists' element={<Lists/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App