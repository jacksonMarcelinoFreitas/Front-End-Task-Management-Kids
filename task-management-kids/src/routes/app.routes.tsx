import { Routes, Route } from 'react-router-dom';
import { Logup } from '../pages/Logup';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Logup />} />
        </Routes>
    )
}