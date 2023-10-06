import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

interface Child{
  age: number;
  name: string;
  role: string;
  nickname: string;
  externalId: string;
  numberTasks: number;
}

interface ChildContextType{
  child: Child | null;
  children: Child[] | null;
  getChild: (externalId: string) => Promise<Child | null>
  setDataChild: (child: Child | null) => void;
  setDataChildren: (children: Child[] | null) => void;
}

/*CONTEXTO DE DADOS DA CRIANÇAS
  LIST CHILD
    MANAGER CHILD (DATA)
      EDIT CHILD (DATA)
*/
const ChildContext = createContext<ChildContextType | undefined>(undefined);

function ChildProvider({ children }: { children: ReactNode }){

  const [dataChild, setDataChild] = useState <Child | null> (null); //pode ser um objeto ou nulo
  const [dataChildren, setDataChildren] = useState <Child[] | null> ([]);  //pode ser um array de objetos



  async function getChild(externalId: string): Promise <Child | null> {

    try {
      const children = dataChildren;

      if (children === null) {
        return null;
      }


      if (children) {
        const filteredChild = children.find((child: Child) => child.externalId === externalId);

        if (filteredChild !== undefined) {
          setDataChild(filteredChild);
        }

        if (filteredChild) {
          return filteredChild;
        }
      }

      return null;

    } catch (error: any) {

      toast.error(`${error}`);


      if (error.response) {

        if (error.response.status === 403) {
          toast.error(`${error.response.data}`);
          toast.error(`${error.response.data.message}`);
        }

      }else{

        toast.error('Não foi possível obter os dados da criança!');

      }

      return null;
    }

  }


  return(
    <ChildContext.Provider value={{ setDataChild, setDataChildren, getChild: async (externalId: string) => getChild(externalId), child: dataChild, children: dataChildren}}>
      {children}
    </ChildContext.Provider>
  )
}

function useChild(): ChildContextType{
  const context = useContext(ChildContext);
  if (context === undefined) {
    throw new Error('useChild deve ser usado dentro de um ChildProvider');
  }
  return context;
}

export { ChildProvider, useChild }
