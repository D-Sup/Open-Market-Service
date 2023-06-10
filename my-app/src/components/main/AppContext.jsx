// AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [posts, setPosts] = useState([]);

  return (
    <AppContext.Provider
      value={{
        posts,
        setPosts,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
