import Typography from "@mui/material/Typography";
import * as React from "react";

export default function SectionHeader({ children }) {
    return (
        <Typography variant="h5" sx={{ fontWeight: 500, fontFamily: 'Roboto Slab', mb: 1, mt: 4 }}>
            { children }
        </Typography>
    );
}

