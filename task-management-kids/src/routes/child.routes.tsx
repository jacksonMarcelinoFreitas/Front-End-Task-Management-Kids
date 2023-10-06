import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { ManagerChild } from '../pages/ManagerChild';
import { EditChild } from '../pages/EditChild';
import { ChildProvider } from '../Contexts/useChildContext'; // Importe o ChildProvider

export function ChildProviderRoutes() {
  return (
    <ChildProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ManagerChild/:id" element={<ManagerChild />} />
        <Route path="/EditChild/:id" element={<EditChild />} />
      </Routes>
    </ChildProvider>
  );
}