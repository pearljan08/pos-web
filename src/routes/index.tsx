import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/Login'
import SetPassword from '../pages/auth/SetPassword'
import Dashboard from '../pages/admin/Dashboard'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
        <Route path="/auth">
          <Route index element={<Login />} />
          <Route path="password" element={<SetPassword />} />
        </Route>
        <Route path="/admin" >
            <Route index element={<Dashboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes