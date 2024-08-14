import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';
import Dashboard from './Components/Dashboard'; 
import AdminPage from './Components/AdminPage';
import AdminDashboard from './Components/AdminDashboard';
import { UserProvider1 } from './Components/UserContext1'; // Updated import
import ProtectedRoute from './Components/ProtectedRoute';
import AdminProtectedRoute from './Components/AdminProtectedRoute';

const App = () => {
  return (
    <UserProvider1>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} /> 
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin-dashboard" element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          } />
        </Routes>
      </Router>
    </UserProvider1>
  );
};

export default App;
