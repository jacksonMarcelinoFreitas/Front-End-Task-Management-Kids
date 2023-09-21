import { api } from '../services/api';
import { createContext, useContext, useState, useEffect, ReactNode  } from 'react';
// import jwt from 'jsonwebtoken';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Credentials {
  login: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  signIn: (credentials: Credentials) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthProvider({ children }: { children: ReactNode }){

  const [data, setData] = useState<{ user: User | null, token: string | null }>({
    user: null,
    token: null,
  });

  async function signIn({ login, password }: Credentials){
    try {
      const response = await api.post ('/v1/auth/login', { login, password});
      const { user, token } = response.data;

      localStorage.setItem("@kidsTasker:user", JSON.stringify(user));
      localStorage.setItem("@kidsTasker:token", token);

      // estará no cabeçalho de todas as requisiçoes
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({user, token});

    } catch (error) {

    }
  }

  function signOut(){
    localStorage.removeItem("@kidsTasker:user");
    localStorage.removeItem("@kidsTasker:token");

    setData({ user: null, token: null });
  }

  useEffect(() => {
    // busca no localstorage as credencias
    const token = localStorage.getItem("@kidsTasker:token");
    const user = localStorage.getItem("@kidsTasker:user");

    if(token && user){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
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

function useAuth(): AuthContextType{
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
