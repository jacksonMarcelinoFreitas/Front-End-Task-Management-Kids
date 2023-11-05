import { PageNotFound } from '../pages/PageNotFound';
import { ConfirmToken } from '../pages/ConfirmToken';
import { Routes, Route } from 'react-router-dom';
import { SendToken } from '../pages/SendToken';
import { Login } from '../pages/Login';
import { Logup } from '../pages/Logup';

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/register" element={<Logup />} />
            <Route path="/token" element={<SendToken />} />
            <Route path="/newPassword" element={<ConfirmToken />} />
        </Routes>
    )
}