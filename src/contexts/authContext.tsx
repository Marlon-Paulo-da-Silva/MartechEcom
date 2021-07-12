import { createContext } from 'react';
import * as auth from '../services/auth';
interface AuthContextdata {
  signed: boolean;
  user: object;
  signIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextdata>({} as AuthContextdata);

export const AuthProvider: React.FC = ({ children }) => {
  async function signIn() {
   const response = await auth.SignIn();
    console.log(response)
  }

  return (
  <AuthContext.Provider value={{ signed: false, user: {}, signIn }}>
    {children}

  </AuthContext.Provider>
  )};


export default AuthContext;