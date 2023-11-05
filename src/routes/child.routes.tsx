import { ListTasksChild } from '../pages/ListTasksChild';
import { PageNotFound } from '../pages/PageNotFound';
import { ShowTask } from '../pages/ShowTask';
import { Routes, Route } from 'react-router-dom';

export function ChildRoutes() {
  return (
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<ListTasksChild />} />
          <Route path="/task/:id" element={<ShowTask />} />
        </Routes>
  );
}