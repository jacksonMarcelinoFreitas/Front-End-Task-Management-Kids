import { StartNewCicle } from '../pages/StartNewCicle';
import { RegisterChild } from '../pages/RegisterChild';
import { MatchAllRoute } from '../pages/MatchAllRoute';
import { ManagerChild } from '../pages/ManagerChild';
import { RegisterTask } from '../pages/RegisterTask';
import { UserIdProvider } from '../hooks/userId';
import { Routes, Route } from 'react-router-dom';
import { ListTasksSponsor } from '../pages/ListTasksSponsor';
import { EditChild } from '../pages/EditChild';
import { EditTask } from '../pages/EditTask';
import { Home } from '../pages/Home';


export function AppRoutes(){
    return(
        <UserIdProvider>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/RegisterChild" element={<RegisterChild />} />
                <Route path="/ListTasksSponsor/:id" element={<ListTasksSponsor />} />
                <Route path="/EditTask/:id" element={<EditTask />} />
                <Route path="/RegisterTask/:id" element={<RegisterTask />} />
                <Route path="/ManagerChild/:id" element={<ManagerChild />} />
                <Route path="/EditChild/:id" element={<EditChild />} />
                <Route path="/StartNewCicle/:id" element={<StartNewCicle />} />
                <Route path="*" element={<MatchAllRoute />} />
            </Routes>
        </UserIdProvider>
    )
}