import { createContext, useState, useEffect, useContext } from 'react';
import * as auth from '../services/auth';
import api from '../Data/apijwt';

export interface User {
  name: string;
  email: string;
}

interface AuthContextdata {
  signed: boolean;
  user: User | null;
  signIn(): Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextdata>({} as AuthContextdata);

export const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {
    async function loadStorageData(){
      const storagedUser = await localStorage.getItem('@auth:user');
      const storagedToken = await localStorage.getItem('@auth:token');

      if(storagedUser && storagedUser){
        api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`

        setUser(JSON.parse(storagedUser));
      }
    }
  });

  async function signIn() {

    
   const response = await auth.SignIn();
   
   setUser(response.user);

   api.defaults.headers['Authorization'] = `Bearer ${response.token}`
   
    console.log('dentro de contexto', response)
  }

  function signOut(){
    setUser(null);
    localStorage.removeItem('@auth:user');
    localStorage.removeItem('@auth:token');
  }

  return (
  <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
    {children}
  </AuthContext.Provider>
  )};


export function useAuth() {
  const context = useContext(AuthContext);  

  return context;
}