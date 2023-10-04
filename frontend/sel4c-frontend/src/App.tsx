import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login/Login';
import { UserTable } from './components/UserTable';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/users" element={<PrivateRoute component={UserTable} />} />
                <Route path="*" element={<Navigate to="/login" />} /> 
            </Routes>
        </Router>
    );
}

export default App;
