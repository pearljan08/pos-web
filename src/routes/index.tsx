import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/Login'
import SetPassword from '../pages/auth/SetPassword'
import Dashboard from '../pages/admin/Dashboard'
import Inventory from '../pages/admin/Inventory'
import NotFound from '../pages/404'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />}/>
        <Route path="/auth">
          <Route index element={<Login />} />
          <Route path="password" element={<SetPassword />} />
        </Route>
        <Route path="/admin" >
            <Route index element={<Dashboard/>} />
            <Route path="inventory" element={<Inventory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes