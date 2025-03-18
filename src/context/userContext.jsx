// import { createContext } from "react";
// import useLocalStorage from "../hooks/useLocalStorage";

// const initUser = {
//   email: "",
//   password: "",
// };

// export const userContext = createContext({
//   user: initUser,
//   setUser: () => {},
// });

// function UserProvider({ children }) {
//   const [user, setUser] = useLocalStorage("user", initUser);
//   return (
//     <userContext.Provider
//       value={{
//         user,
//         setUser,
//       }}
//     >
//       {children}
//     </userContext.Provider>
//   );
// }

// export default UserProvider;