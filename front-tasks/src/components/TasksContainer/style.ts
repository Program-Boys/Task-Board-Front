import { Box } from "@mui/material";
import styled from "styled-components";

export const BoxMuiStyled = styled(Box)`
  display: flex;
  gap: 15px;
  flex-wrap: nowrap;
  overflow: auto;
  @media screen and (max-width: 768px) {
  }
`;

export const FormStyled = styled.form`
  display: flex;
  align-items: "center";
  justify-content: "space-around";
`;
