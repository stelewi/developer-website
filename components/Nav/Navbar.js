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
    {
        title: "Swapfest (a multiplayer card swapping game)",
        href: "/swapfest-game"
    },
];

function Navbar({ barTitle = "Pragmatic Dev", forceCompactLayout = false }) {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const displaySmall = (val = 'flex') => {

        if(forceCompactLayout) {
            return { xs: val, md: val };
        }

        return { xs: val, md: 'none' };
    }

    const displayLarge = (val = 'flex') => {

        if(forceCompactLayout) {
            return { xs: 'none', md: 'none' };
        }

        return { xs: 'none', md: val };
    }

    return (
        <AppBar position="static" color="secondary">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* larger devices show icon/title left */}
                    <CodeIcon sx={{ display: displayLarge(), mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        href="/"
                        sx={{
                            mr: 4,
                            display: displayLarge(),
                            fontFamily: 'Roboto Slab',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        { barTitle }
                    </Typography>

                    {/* smaller devices use burger menu left */}
                    <Box sx={{ flexGrow: 1, display: displaySmall() }}>
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
                                display: displaySmall('block'),
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
                    <CodeIcon sx={{ display: displaySmall(), mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component={Link}
                        href="/"
                        sx={{
                            mr: 2,
                            display: displaySmall(),
                            flexGrow: 1,
                            fontFamily: 'Roboto Slab',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        { barTitle }
                    </Typography>

                    {/* larger devices show menu items in bar */}
                    <Box sx={{ flexGrow: 1, display: displayLarge(), gap: 2 }}>
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