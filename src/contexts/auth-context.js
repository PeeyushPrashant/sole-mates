import { createContext, useContext, useState } from "react";
import { signUpServices, loginServices } from "../Services/services";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const localStorageToken = JSON.parse(localStorage.getItem("auth"));
  const [token, setToken] = useState(localStorageToken?.token);
  const [user, setUser] = useState(localStorageToken?.user);

  const signUpHandler = async (e, { email, password, name }) => {
    try {
      const response = await signUpServices(email, password, name);
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem(
          "auth",
          JSON.stringify({
            token: response.data.encodedToken,
            user: response.data.createdUser,
          })
        );
        setToken(response.data.encodedToken);
        setUser(response.data.createdUser);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loginHandler = async (e, { email, password }, setLoginForm) => {
    try {
      if (e.target.innerText === "Login with test credentials") {
        setLoginForm({
          email: "adarshbalika@gmail.com",
          password: "adarshBalika123",
        });
        var response = await loginServices(
          "adarshbalika@gmail.com",
          "adarshBalika123"
        );
      } else var response = await loginServices(email, password);
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem(
          "auth",
          JSON.stringify({
            token: response.data.encodedToken,
            user: response.data.foundUser,
          })
        );
        setToken(response.data.encodedToken);
        setUser(response.data.foundUser);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logOutHandler = () => {
    localStorage.removeItem("auth");
    setToken(undefined);
    setUser(undefined);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ signUpHandler, loginHandler, token, logOutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
