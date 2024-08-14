import React, { createContext, useState } from 'react';

export const UserContext1 = createContext();

export const UserProvider1 = ({ children }) => {
  const [userName1, setUserName1] = useState('');

  return (
    <UserContext1.Provider value={{ userName1, setUserName1 }}>
      {children}
    </UserContext1.Provider>
  );
};
