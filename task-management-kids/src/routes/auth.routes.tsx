import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Logup } from '../pages/Logup';
import { SendToken } from '../pages/SendToken';
import { ConfirmToken } from '../pages/ConfirmToken';

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Logup />} />
            <Route path="/token" element={<SendToken />} />
            <Route path="/newPassword" element={<ConfirmToken />} />
        </Routes>
    )
}