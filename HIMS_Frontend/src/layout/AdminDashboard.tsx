import React from 'react'
import Sidebar from '../components/Patient/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Header />
          <Outlet />
        </div>
      </div>
  )
}

export default AdminDashboard