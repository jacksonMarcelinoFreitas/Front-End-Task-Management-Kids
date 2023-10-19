import { BrowserRouter } from "react-router-dom";
import { ChildRoutes } from './child.routes';
import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/auth';

export function Routes(){
    const { user } = useAuth();
    return(
        <BrowserRouter>
            { user ?
            // <>
                <ChildRoutes />
                // <AppRoutes />
            // </>
            :
                <AuthRoutes /> }
        </BrowserRouter>
    )
}