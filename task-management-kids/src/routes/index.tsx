import { BrowserRouter } from "react-router-dom";
import { ChildRoutes } from './child.routes';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/auth';

export function Routes(){
    const { user } = useAuth();
    console.log(user);
    return(
        <BrowserRouter>
            {!user ? <AuthRoutes /> :
                user.role.includes('SPONSOR') ? <AppRoutes /> : <ChildRoutes />
            }
        </BrowserRouter>
    )
}