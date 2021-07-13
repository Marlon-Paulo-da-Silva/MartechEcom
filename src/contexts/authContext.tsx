import { createContext, useState, useEffect } from 'react';
import * as auth from '../services/auth';

interface AuthContextdata {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextdata>({} as AuthContextdata);

export const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<object | null>(null);


  useEffect(() => {
    async function loadStorageData(){
      const storagedUser = await localStorage.getItem('@auth:user');
      const storagedToken = await localStorage.getItem('@auth:token');

      if(storagedUser && storagedUser){
        setUser(JSON.parse(storagedUser));
      }
    }
  });

  async function signIn() {

    
   const response = await auth.SignIn();
   
   setUser(response.user);
   
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


export default AuthContext;