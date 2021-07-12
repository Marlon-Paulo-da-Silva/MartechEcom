import { createContext } from 'react';

interface AuthContextdata {
  signed: boolean;
  token: string;
  user: object;
}

const AuthContext = createContext<AuthContextdata>({} as AuthContextdata);

export const AuthProvider: React.FC = ({ children }) => {
  return (
  <AuthContext.Provider value={{ signed: false, token: '', user: {} }}>
    {children}

  </AuthContext.Provider>
  );
}

export default AuthContext;