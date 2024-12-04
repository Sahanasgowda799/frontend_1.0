import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProtectedRoute from './ProtectedRoute';
import Login from './pages/login';
import Register from './pages/register';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/"
                    element={
                        <ProtectedRoute isAuthenticated={true}>
                            <Home />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
};

export default AppRouter;
