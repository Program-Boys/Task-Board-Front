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
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProvider) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser>({} as IUser);
  const [isLogged, setIsLogged] = useState(false);

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
