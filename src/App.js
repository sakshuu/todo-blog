import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Details from './pages/Details'
import Home from './pages/Home'
import Pagenotfound from './pages/Pagenotfound'
import Account from './pages/user/Account'
import Todo from './pages/Todo'
import Register from './pages/Register'

export default function App() {
  return (<>

<BrowserRouter>
<NavigationBar/>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/account' element={<Account/>} />
<Route path='/details/:blogId' element={<Details/>} />
<Route path='/todos' element={<Todo/>} />
<Route path='/register' element={<Register/> } />
<Route path='*' element={<Pagenotfound/>} />
</Routes>
</BrowserRouter>
  </>
  )
}
