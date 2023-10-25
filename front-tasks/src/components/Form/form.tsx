import React, { FormEventHandler, ReactNode } from "react";
import { FormStyled } from "./style";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";

export interface IFormData {
  name?: string;
  email: string;
  password: string;
}

interface IForm {
  children: ReactNode;
  title: string;
  redirect?: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const Form = ({ children, title, redirect, onSubmit }: IForm) => {
  return (
    <Box
      sx={{
        width: "300px",
        padding: "25px",
        margin: "0 auto",
        backgroundColor: "var(--default-white)",
      }}
    >
      <FormStyled onSubmit={onSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography color={"var(--gray)"} fontWeight={"bold"}>
            {title}
          </Typography>

          {redirect && <Link to={redirect}>Login</Link>}
        </Box>
        {children}

        <Button type="submit">Confirm</Button>
      </FormStyled>
    </Box>
  );
};

export default Form;
