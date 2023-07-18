import Typography from "@mui/material/Typography";
import * as React from "react";

export default function PageHeader({ children }) {
    return (
        <Typography variant="h4" sx={{ fontWeight: 500, fontFamily: 'Roboto Slab', mb: 2 }}>
            { children }
        </Typography>
    );
}

