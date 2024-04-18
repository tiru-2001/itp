import { createContext, useContext, useState } from "react";
export const usestate = createContext();

const UseAuth = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  return (
    <>
      <usestate.Provider value={{ user, setUser }}>
        {children}
      </usestate.Provider>
    </>
  );
};

export default UseAuth;
