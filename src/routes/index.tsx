import { HashRouter } from "react-router-dom";
import { ChildRoutes } from './child.routes';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/auth';

export function Routes(){
    const { user } = useAuth();
    return(
        <HashRouter>
            {!user ? <AuthRoutes /> :
                user.role.includes('SPONSOR') ? <AppRoutes /> : <ChildRoutes />
            }
        </HashRouter>
    )
}