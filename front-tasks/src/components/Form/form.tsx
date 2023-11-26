import React, { FormEventHandler, ReactNode } from "react";
import { FormStyled } from "./style";
import { Box, Button, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

interface IForm {
  children: ReactNode;
  title: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const Form = ({ children, title, onSubmit }: IForm) => {
  const location = useLocation();

  return (
    <Box
      sx={{
        width: "300px",
        padding: "25px",
        borderRadius: "8px",
        backgroundColor: "var(--default-white)",
        position: "absolute",
        left: "50%",
        top: "50%",
        marginLeft: "-185px",
        marginTop: "-220px",
      }}
    >
      <FormStyled onSubmit={onSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography color={"var(--gray)"} fontWeight={"bold"}>
            {title}
          </Typography>
        </Box>
        {children}

        <Button type="submit" variant="contained">
          {title}
        </Button>
        {location.pathname === "/" ? (
          <>
            <Typography color={"var(--gray)"}>
              No account?
              <Link
                to={"/register"}
                style={{
                  textDecoration: "underline",
                }}
              >
                Sign up
              </Link>
            </Typography>
          </>
        ) : (
          <>
            <Typography color={"var(--gray)"}>
              Already have an account?
              <Link
                to={"/"}
                style={{
                  textDecoration: "underline",
                }}
              >
                Sign In
              </Link>
            </Typography>
          </>
        )}
      </FormStyled>
    </Box>
  );
};

export default Form;
