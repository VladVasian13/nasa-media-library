import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";

export const SearchContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "35px",
    padding: "22px"
})

export const SearchInput = styled(TextField)({
    width: "30%",
    minWidth: "200px",
    height: "50px"
})

export const SearchButton = styled(Button)({
    height: "50px"
})