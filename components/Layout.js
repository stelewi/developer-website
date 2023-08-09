import styles from './Layout.module.css'
import Navbar from "./Nav/Navbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
export default function Layout(
    {
        children,
        barTitle = "Pragmatic Dev",
        forceCompactLayout = false,
        noMargins = false
    }
) {
    return <div>
        <Navbar barTitle={barTitle} forceCompactLayout={forceCompactLayout}/>
        <CssBaseline/>
        <Container disableGutters maxWidth={noMargins ? false : "lg"}>
            <Box sx={{ mt: noMargins ? 0 : 4, mx: noMargins ? 0 : 4}}>
                {children}
            </Box>
        </Container>
    </div>;
}