import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { ITask } from "../Tasks/tasks.context";

interface IUserProvider {
  children: ReactNode;
}

export interface IUserContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
}

//Adicionar as outras infos do user depois
export interface IUser {
  name: string;
  email: string;
  id: string;
  createdAt: string;
  isActive: boolean;
  updatedAt: string;
  tasks: ITask[];
}

interface IJwt {
  email: string;
  exp: number;
  iat: number;
  id: string;
  isActive: boolean;
  name: string;
  sub: string;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProvider) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser>({} as IUser);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      const token = window.localStorage.getItem("session") as any;

      if (token) {
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          setIsLogged(true);

          const decodedToken: IJwt = jwtDecode(token);

          await api
            .get(`users/${decodedToken.id}`)
            .then((res) => {
              setUser(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (error) {}
      }
    };

    loadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
