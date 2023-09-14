import { api } from '../services/api';
import { createContext, useContext, useState, useEffect  } from 'react';

const AuthContext = createContext({});

function AuthProvider({children}){

  interface Credentials {
    login: string;
    password: string;
  }

  async function signIn({ login, password }: Credentials) {

  }

  function signOut(){
    // localStorage.removeItem("@rocketnotes:token");
    // localStorage.removeItem("@rocketnotes:user");

    // setData({});
  }

  useEffect(() => {
    //busca no localstorage as credencias
    // const token = localStorage.getItem("@rocketnotes:token");
    // const user = localStorage.getItem("@rocketnotes:user");

    // if(token && user){
    //   api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    //   setData({
    //     token,
    //     user: JSON.parse(user)
    //   });
    // }

  }, []);

  return(
    //Aqui todas as páginas filhas herdarão as informações de user (contexto)
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
      }}>

      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth }

//useEffect: primeira coisa a ser executa após a renderização do elemento
//useState: possivel configurar estados para os elementos, permitindo-os reagir a eventos
//useContext: faz o uso do contexto já criado
//createContext: faz a criação de um contexto
//useAuth: usa um contexto chamado AuthContext, que permite que tudo do contexto seja acessado onde ele for chamado
