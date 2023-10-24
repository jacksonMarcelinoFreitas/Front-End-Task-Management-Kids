import { ListTasksChild } from '../pages/ListTasksChild';
import { ShowTask } from '../pages/ShowTask';
import { Routes, Route } from 'react-router-dom';

export function ChildRoutes() {
  return (
        <Routes>
          <Route path="/" element={<ListTasksChild />} />
          <Route path="/task/:id" element={<ShowTask />} />
        </Routes>
  );
}