import { Box, Button, Grid, Typography } from "@mui/material";
import MenuIcon from "../MenuIcon/menuIcon";
import { ITask } from "../../context/Tasks/tasks.context";
import { Add, AddCircle } from "@mui/icons-material";

interface ITaskList {
  name: string;
  tasks: ITask[];
}

const TaskList = ({ name, tasks }: ITaskList) => {
  return (
    <Grid
      sx={{
        backgroundColor: "var(--default-white)",
        borderRadius: "8px",
        width: "300px",
        boxShadow: "rgba(169, 174, 183, 0.5) 0px 1px 2px 0px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px 8px 10px 15px",
        }}
      >
        <Typography color={"var(--black)"}>{name}</Typography>

        <MenuIcon />
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "5px",
          alignItems: "center",
          svg: {
            fill: "var(--blue)",
          },
          padding: "15px 8px 10px 15px",
          "svg:nth-child(2)": {
            display: "none",
            fill: "var(--blue)",
            color: "var(--blue)",
          },
          "&:hover": {
            cursor: "pointer",
            "svg:first-child": {
              display: "none",
            },
            button: {
              transition: "0.2s",
              color: "var(--blue)",
            },
            "svg:nth-child(2)": {
              display: "flex",
            },
          },
        }}
      >
        <Add />
        <AddCircle />

        <Button
          sx={{
            fontSize: "14px",
            textTransform: "none",
            color: "var(--black)",
            "&:hover": {
              backgroundColor: "initial",
            },
          }}
        >
          Add a task
        </Button>
      </Box>
    </Grid>
  );
};

export default TaskList;
