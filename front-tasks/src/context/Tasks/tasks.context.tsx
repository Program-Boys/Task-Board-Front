import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { IUser } from "../User/user.context";

interface ITaskProvider {
  children: ReactNode;
}

export interface ITaskContext {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

//Adicionar as outras infos da task depois
export interface ITask {
  id: string;
  name: string;
}

export const TaskContext = createContext<ITaskContext>({} as ITaskContext);

const TaskProvider = ({ children }: ITaskProvider) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const listTasks = async () => {
      const { data } = await api.get("/tasks");

      setTasks(data);
    };

    listTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
