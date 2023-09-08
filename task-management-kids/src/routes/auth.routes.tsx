import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Logup } from '../pages/Logup';

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Logup />} />
        </Routes>
    )
}