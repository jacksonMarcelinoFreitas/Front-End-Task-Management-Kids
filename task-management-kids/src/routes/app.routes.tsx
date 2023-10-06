import { Routes, Route } from 'react-router-dom';
import { RegisterChild } from '../pages/RegisterChild';
import { RegisterTask } from '../pages/RegisterTask';
import { ManagerChild } from '../pages/ManagerChild';
import { EditChild } from '../pages/EditChild';
import { TasksChild } from '../pages/TasksChild';
import { EditTask } from '../pages/EditTask';
import { Home } from '../pages/Home';

export function AppRoutes(){
    return(
        <Routes>
            {/* <Route path="/" element={<Home />} /> */}

            {/* <Route path="/ManagerChild/:id" element={<ManagerChild />} /> */}
            <Route path="/RegisterChild" element={<RegisterChild />} />
            <Route path="/TasksChild/:id" element={<TasksChild />} />
            {/* <Route path="/EditChild/:id" element={<EditChild />} /> */}

            <Route path="/EditTask/:id" element={<EditTask />} />
            <Route path="/RegisterTask/:id" element={<RegisterTask />} />
            <Route path="/" element={<Home />} />
            <Route path="/ManagerChild/:id" element={<ManagerChild />} />
            <Route path="/EditChild/:id" element={<EditChild />} />
        </Routes>
    )
}