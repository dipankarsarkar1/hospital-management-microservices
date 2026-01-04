import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Random from '../components/Random';
import AdminDashboard from '../layout/AdminDashboard';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import PatientDashboard from '../layout/PatientDashboard';
import PatientProfilePage from '../Pages/Patient/PatientProfilePage';
import DoctorProfilePage from '../Pages/Doctor/DoctorProfilePage';
import DoctorDashboard from '../layout/DoctorDashboard';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoutes><LoginPage /></PublicRoutes>} />
        <Route path="/register" element={<PublicRoutes><RegisterPage /></PublicRoutes>} />
        <Route path="/" element={<ProtectedRoutes><AdminDashboard /></ProtectedRoutes>}>
          <Route path="/dashboard" element={<Random />} />
          <Route path="/doctors" element={<Random />} />
          <Route path="/patients" element={<Random />} />
          <Route path="/phermacy" element={<Random />} />
          {/* <Route path="/appointments" element={<Random />} /> */}
        </Route>
        <Route path="/doctor" element={<ProtectedRoutes><DoctorDashboard /></ProtectedRoutes>}>
          <Route path="dashboard" element={<Random />} />
          <Route path="profile" element={<DoctorProfilePage />} />
          <Route path="appointments" element={<Random />} />
          <Route path="phermacy" element={<Random />} />
        </Route>

        <Route path="/patient" element={<ProtectedRoutes><PatientDashboard /></ProtectedRoutes>}>
          <Route path="dashboard" element={<Random />} />
          <Route path="profile" element={<PatientProfilePage />} />
          <Route path="appointments" element={<Random />} />
          <Route path="book" element={<Random />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes