import React from 'react'
import Sidebar from '../components/Doctor/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'

const DoctorDashboard = () => {
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

export default DoctorDashboard