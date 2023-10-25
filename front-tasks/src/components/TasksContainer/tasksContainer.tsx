import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import TaskList from "../TaskList/taskList";
import { BoxMuiStyled, FormStyled } from "./style";
import { useState } from "react";
import { Add } from "@mui/icons-material";

const TasksContainer = () => {
  const [click, setClick] = useState(false);

  const clickControl = (state: boolean) => {
    setClick(!state);
  };

  return (
    <>
      <Typography variant="h5" color={"var(--gray)"} mb={"10px"} p={"15px"}>
        Main Board
      </Typography>
      <Grid
        container
        sx={{
          p: "15px",
        }}
      >
        <BoxMuiStyled>
          <TaskList
            name="Minhas tarefas"
            tasks={[{ name: "Treinamento", id: "1" }]}
          />

          <TaskList
            name="Minhas tarefas"
            tasks={[{ name: "Treinamento", id: "1" }]}
          />

          <TaskList
            name="Minhas tarefas"
            tasks={[{ name: "Treinamento", id: "1" }]}
          />
        </BoxMuiStyled>
        <Box
          sx={{
            ml: "15px",
            color: "var(--gray)",
            borderRadius: "8px",
            width: "300px",
            height: "52px",
            backgroundColor: "var(--default-white)",
            textAlign: "center",
          }}
        >
          {!click ? (
            <Button
              onClick={() => clickControl(click)}
              sx={{
                textTransform: "none",
                color: "var(--gray)",
                padding: "20px 8px 10px 15px",
              }}
            >
              + Add new list
            </Button>
          ) : (
            <Box
              sx={{
                fieldset: {
                  border: "none",
                },
                svg: {
                  fill: "var(--blue)",
                },
              }}
            >
              <FormStyled onSubmit={(e) => e.preventDefault()}>
                <TextField placeholder="New list" />

                <Button type="submit" onClick={() => clickControl(click)}>
                  <Add />
                </Button>
              </FormStyled>
            </Box>
          )}
        </Box>
      </Grid>
    </>
  );
};

export default TasksContainer;
