import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Logup';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    )
}