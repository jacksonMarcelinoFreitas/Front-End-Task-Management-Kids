import { Routes, Route } from 'react-router-dom';
import { RegisterChild } from '../pages/RegisterChild';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/registerChild" element={<RegisterChild />} />
        </Routes>
    )
}