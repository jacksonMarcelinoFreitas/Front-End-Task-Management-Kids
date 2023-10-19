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
        <Routes>
            <Route path="/RegisterChild" element={<RegisterChild />} />
            <Route path="/ListTasksSponsor/:id" element=
            {
            <UserIdProvider>
                <ListTasksSponsor />
            </UserIdProvider>
            } />
            <Route path="/EditTask/:id" element=
            {
                <UserIdProvider>
                    <EditTask />
                </UserIdProvider>
            } />
            <Route path="/RegisterTask/:id" element={<RegisterTask />} />
            <Route path="/" element=
            {
                <UserIdProvider>
                    <Home />
                </UserIdProvider>
            } />
            <Route path="/ManagerChild/:id" element=
            {
                <UserIdProvider>
                    <ManagerChild />
                </UserIdProvider>
            } />
            <Route path="/EditChild/:id" element={<EditChild />} />
            <Route path="/StartNewCicle/:id" element=
            {
                <UserIdProvider>
                    <StartNewCicle />
                </UserIdProvider>
            } />
            <Route path="*" element={<MatchAllRoute />} />
        </Routes>
    )
}