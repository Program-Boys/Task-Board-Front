import { Grid, Typography } from "@mui/material";
import TaskList from "../TaskList/taskList";

const TasksContainer = () => {
  return (
    <>
      <Grid
        container
        sx={{
          p: "15px",
        }}
      >
        <Typography variant="h5" color={"var(--gray)"} mb={"10px"}>
          Main Board
        </Typography>

        <Grid container>
          <TaskList
            name="Minhas tarefas"
            tasks={[{ name: "Treinamento", id: "1" }]}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default TasksContainer;
