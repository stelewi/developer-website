import * as React from "react";
import Box from "@mui/material/Box";
import {Avatar} from "@mui/material";

export default function ContentWithPic({ children, picSrc, picAlt }) {
    return (
        <Box sx={{display: 'flex', gap: 4}}>
            <Box maxWidth="70%">
                { children }
            </Box>
            <Box>
                <Avatar src={picSrc} alt={picAlt} sx={{width: 150, height: 150}}/>
            </Box>
        </Box>
    );
}
