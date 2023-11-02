import { createContext, useContext, useState, useEffect, ReactNode  } from 'react';
import { IAuthContextType, IJwtPayload, IUser, ICredentials} from './types';
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext<IAuthContextType | undefined>(undefined);

function AuthProvider({ children }: { children: ReactNode }){

  // const navigate = useNavigate();

  const [data, setData] = useState<{ user: IUser | null, token: string }>({
    user: null,
    token: '',
  });

  async function signIn({ login, password }: ICredentials){

    try {
      const response = await api.post('/v1/auth/login', {login, password});

      const { token } = response.data;

      const { sub, externalId, name, role, exp } = jwt_decode(token) as IJwtPayload;

      const user = {
        email: sub,
        externalId,
        name,
        role,
        exp
      };

      setData({user, token});

      localStorage.setItem("@kidsTasker:token", token);
      localStorage.setItem("@kidsTasker:user", JSON.stringify(user));

      api.defaults.headers.common['Authorization'] = token;

    } catch (error: any) {

      if (error.response) {

        if (error.response.status === 403) {
          toast.error(`${error.response.data.message}`);
        }

      }else{

        toast.error('Não foi possível fazer login!');

      }
    }
  }

  function signOut(){
    localStorage.removeItem("@kidsTasker:user");
    localStorage.removeItem("@kidsTasker:token");

    api.defaults.headers.common['Authorization'] = null;

    setData({ user: null, token: '' });
  }

  useEffect(() => {
    const token = localStorage.getItem("@kidsTasker:token");
    const user = localStorage.getItem("@kidsTasker:user");

    api.defaults.headers.common['Authorization'] = null;

    if(token && user){
      api.defaults.headers.common['Authorization'] = token;

      setData({
        user: JSON.parse(user),
        token: token,
      });
    }

  }, []);

  return(
    //Aqui todas as páginas filhas herdarão as informações de user (contexto)
    <AuthContext.Provider value={{ signIn, signOut, user: data.user}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAuthContextType{
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth }

//useEffect: primeira coisa a ser executa após a renderização do elemento
//useState: possivel configurar estados para os elementos, permitindo-os reagir a eventos
//useContext: faz o uso do contexto já criado
//createContext: faz a criação de um contexto
//useAuth: usa um contexto chamado AuthContext, que permite que tudo do contexto seja acessado onde ele for chamado

// useEffect(() => {
  //   api.interceptors.response.use(
  //     response => response,
  //     error => {
  //       if (error.response.status === 403) { // Se o status do erro for 403 (não autorizado), faça logout do usuário
  //         console.log("Interceptor")
  //         signOut();
  //       }
  //       return Promise.reject(error);
  //     }
  //   );
  // }, [signOut]);
    // const interval = setInterval(() => {
      // const token = localStorage.getItem("@kidsTasker:token");
      // const user = localStorage.getItem("@kidsTasker:user");

      // if (user && token) {
      //   const userObject = JSON.parse(user);
      //   const exp = userObject.exp;

      //   const expireDate = new Date(exp * 1000);
      //   console.log(expireDate)
      //   const currentDate = new Date();
      //   console.log(currentDate)

      //   if (currentDate > expireDate) {
      //     toast.warning(`Sua sessão expirou. Faça o login novamente!`);
      //     // signOut(); // Executa o logout quando o token expira
      //   }
      // }
    // }, 10000); // Verifica a cada 1 minuto (pode ser ajustado conforme necessário)

    // return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  // }, [signOut]);