import { createContext, useState } from 'react';
import * as auth from '../services/auth';

interface AuthContextdata {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextdata>({} as AuthContextdata);

export const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<object | null>(null);

  async function signIn() {
   const response = await auth.SignIn();
   
   setUser(response.user);
    console.log('dentro de contexto', response)
  }

  return (
  <AuthContext.Provider value={{ signed: !!user, user, signIn }}>
    {children}
  </AuthContext.Provider>
  )};


export default AuthContext;