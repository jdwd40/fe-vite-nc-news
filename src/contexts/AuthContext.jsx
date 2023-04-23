import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username) => {
    // check api for user GET /api/users/:username
    const response = await axios.get(`/api/users/${username}`);
    // if user exists, set user
    const user = response.data.user;
    setUser(user);

    if (response.status === 200) {
      setUser(response.data.user);
    } else {
      throw new Error('Login failed');
    }
  };





  const logout = () => {
    setUser(null);
  };

  const authValue = { user, login, logout };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
