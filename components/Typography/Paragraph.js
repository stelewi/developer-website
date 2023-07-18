import Typography from "@mui/material/Typography";
import * as React from "react";

export default function Paragraph({ children }) {
    return (
        <Typography sx={{ py: 1 }}>
            { children }
        </Typography>
    );
}
