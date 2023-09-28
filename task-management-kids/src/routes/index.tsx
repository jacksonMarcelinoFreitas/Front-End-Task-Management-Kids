import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/auth'; //hook que já traz os dados do contexto


export function Routes(){
    const { user } = useAuth();
    return(
        <BrowserRouter>
            { user ? <AppRoutes /> : <AuthRoutes /> }
            {/* <AppRoutes /> */}
            {/* <AuthRoutes /> */}
        </BrowserRouter>
    )
}