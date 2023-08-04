import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import CodeIcon from '@mui/icons-material/Code';
import Link from "next/link";
import ButtonLink from "../Buttons/ButtonLink";
import UserMenu from "./UserMenu";

const pages = [
    {
        title: "About Me",
        href: "/bio"
    },
    {
        title: "Experiments & Code",
        href: "/experiments"
    },
    {
        title: "Contact",
        href: "/contact"
    },
];

function Navbar() {
    const barTitle = "Pragmatic Dev"
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" color="secondary">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* larger devices show icon/title left */}
                    <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        href="/"
                        sx={{
                            mr: 4,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Roboto Slab',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        { barTitle }
                    </Typography>

                    {/* smaller devices use burger menu left */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                                    <Link
                                        href={page.href}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Typography
                                            textAlign="center"
                                            sx={{
                                                color: "black"
                                            }}
                                        >
                                            {page.title}
                                        </Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* smaller devices show icon/title center */}
                    <CodeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component={Link}
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Roboto Slab',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        { barTitle }
                    </Typography>

                    {/* larger devices show menu items in bar */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                        {pages.map((page) => (
                            <ButtonLink
                                key={page.title}
                                title={page.title}
                                href={page.href}
                                onClick={handleCloseNavMenu}
                            />
                        ))}
                    </Box>

                    {/* all devices show user/avatar menu on right */}
                    <Box sx={{ flexGrow: 0 }}>
                        <UserMenu/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;