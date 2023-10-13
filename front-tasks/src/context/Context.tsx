import { ReactNode } from "react";
import TasksProvider from "./Tasks/tasks.context";
import UserProvider from "./User/user.context";

interface IContext {
  children: ReactNode;
}

const Context = ({ children }: IContext) => {
  return (
    <UserProvider>
      <TasksProvider>{children}</TasksProvider>
    </UserProvider>
  );
};

export default Context;
