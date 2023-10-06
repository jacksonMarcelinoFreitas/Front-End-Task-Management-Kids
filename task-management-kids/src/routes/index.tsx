import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
// import { ChildProviderRoutes } from './child.routes';
import { useAuth } from '../hooks/auth'; //hook que já traz os dados do contexto
// import { ChildProvider } from '../Contexts/useChildContext';


export function Routes(){
    const { user } = useAuth();
    return(
        <BrowserRouter>
            { user ?
            // <>
                // {/* <ChildProviderRoutes /> */}
                <AppRoutes />
            // </>
            :
                <AuthRoutes /> }
        </BrowserRouter>
    )
}