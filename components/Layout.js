import styles from './Layout.module.css'
import Navbar from "./Nav/Navbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
export default function Layout({ children }) {
    return <div>
        <Navbar/>
        <Container maxwidth="lg">
            <Box sx={{ mt: 4, mx: 4}}>
                {children}
            </Box>
        </Container>
    </div>;
}