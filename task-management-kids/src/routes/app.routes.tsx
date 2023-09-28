import { Routes, Route } from 'react-router-dom';
import { RegisterChild } from '../pages/RegisterChild';
import { Home } from '../pages/Home';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registerChild" element={<RegisterChild />} />
        </Routes>
    )
}