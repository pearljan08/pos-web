import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/Login'
import SetPassword from '../pages/auth/SetPassword'
import Dashboard from '../pages/admin/Dashboard'
import Inventory from '../pages/admin/Inventory'
import NotFound from '../pages/404'
import Users from '../pages/admin/Users'
import SideNav from '../components/SideNav'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />}/>
        <Route path="/auth">
          <Route index element={<Login />} />
          <Route path="password" element={<SetPassword />} />
        </Route>
        <Route path="/admin" element={<SideNav />}>
            <Route index element={<Dashboard/>} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes