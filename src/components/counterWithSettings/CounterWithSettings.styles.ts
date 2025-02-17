import { SxProps, Theme } from "@mui/material";

export const counterSettingsSx: SxProps = {
    display: "flex",
    gap: "150px"
}


export const settingsWithCounterSx = (theme: Theme) => ({
    border: `2px solid ${theme.palette.text.primary}`,
    borderRadius: "15px",
    padding: "20px",
    width: "240px",
    height: "160px",
})