import { createContext, useContext, useState, useEffect, ReactNode  } from 'react';
import { IAuthContextType, IJwtPayload, IUser, ICredentials} from './types';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext<IAuthContextType | undefined>(undefined);

function AuthProvider({ children }: { children: ReactNode }){

  const [data, setData] = useState<{ user: IUser | null, token: string }>({
    user: null,
    token: '',
  });

  async function signIn({ login, password }: ICredentials){

    try {
      const response = await api.post('/v1/auth/login', {login, password});

      const { token } = response.data;

      const { sub, externalId, name, role } = jwt_decode(token) as IJwtPayload;

      const user = {
        email: sub,
        externalId,
        name,
        role,
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
    // busca no localstorage as credencias

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