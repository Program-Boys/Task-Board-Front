import { Typography } from "@mui/material";

interface IErrorSpan {
  error?: string;
}

const ErrorSpan = ({ error }: IErrorSpan) => {
  return (
    <Typography
      component={"span"}
      sx={{
        fontWeight: "bold",
        fontSize: "11px",
        color: "var(--error)",
      }}
    >
      {error}
    </Typography>
  );
};

export default ErrorSpan;
