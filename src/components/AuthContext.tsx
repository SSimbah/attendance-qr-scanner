// import React, { PropsWithChildren, createContext, useContext, useState } from 'react';

// interface User {
//     userNumber: string;
//     userPassword: string;
//   }

// interface AuthContextType {
//   user: User | null;
//   login: (user: User) => void;
//   logout: () => void;
//   isAuthenticated: boolean
// }

// const AuthContext = createContext<AuthContextType>({
//   user: null,
//   login: () => {},
//   logout: () => {},
//   isAuthenticated: false
// });

// export const UseAuth = () => useContext(AuthContext);

// export const AuthProvider: React.FC<PropsWithChildren> = ({children}) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

//   const login = (user: User) => {
//     setUser(user);
//     sessionStorage.setItem('user', JSON.stringify(user));
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     setUser(null);
//     sessionStorage.removeItem('user');
//     setIsAuthenticated(false);
//   };

//   return <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>{children}</AuthContext.Provider>;
// };


// // import React, { PropsWithChildren, createContext, useContext, useState } from 'react';

// // interface AuthContextData {
// //   isAuthenticated: boolean;
// //   login: () => void;
// //   logout: () => void;
// // }

// // const AuthContext = createContext<AuthContextData>({
// //   isAuthenticated: false,
// //   login: () => {},
// //   logout: () => {},
// // });

// // const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
// //   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

// //   const login = () => {
// //     setIsAuthenticated(true);
// //   };

// //   const logout = () => {
// //     setIsAuthenticated(false);
// //   };

// //   return (
// //     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // const UseAuth = () => useContext(AuthContext);

// // export { AuthProvider, UseAuth };

import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function AuthContext() {
  const token = localStorage.getItem('token'); // Retrieve the token from localStorage
  const history = useHistory();

  useEffect(() => {
    if (!token) {
      history.push('/login');
    }
  }, [token, history]);

  return !!token;
}

export default AuthContext;
