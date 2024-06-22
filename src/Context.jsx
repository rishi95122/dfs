import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
const Context = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("userdata")) || null
  );
  const [todosData, setTodosdata] = useState([]);


  const getData = (username) => {

     axios.post(`http://localhost:8800/api/tasks/get`, { username: username })
      .then((result) => {
        setTodosdata(result.data);
      });
    
  };


 
  useEffect(() => {
    if(currentUser)
    getData(currentUser.username);
  }, []);
  return (
    <AuthContext.Provider
      value={{
       
        getData,
       
        currentUser,
        setCurrentUser,
        todosData,
        setTodosdata,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default Context;
