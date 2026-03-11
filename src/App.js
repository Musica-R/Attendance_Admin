import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import AdminLayout from './components/AdminLayout';
import DashboardHome from './pages/DashboardHome';
import RegistrationForm from './pages/RegistrationForm';
import AttendanceList from './pages/AttendanceList';
import EmpList from './pages/EmpList';
import LeaveList from './pages/LeaveList';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="add-employee" element={<RegistrationForm />} />
            <Route path="emp-list" element={<EmpList />} />
            <Route path="leave-list" element={<LeaveList />} />
            <Route path="attendance" element={<AttendanceList />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
