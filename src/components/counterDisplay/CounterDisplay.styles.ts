import { SxProps, Theme } from "@mui/material";

export const getColorCounter = (payload: { max: number, counter: number, theme: Theme }): SxProps => ({
    color: payload.counter === payload.max ? "red" : payload.theme.palette.text.primary,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    border: `2px solid ${payload.theme.palette.text.primary}`,
    borderRadius: "10px",
    marginBottom: "20px"
})