import {Avatar, Tooltip} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useContext, useEffect} from "react";
import {UserContext} from "../Context/UserContextProvider";
import stringToColor from "src/utils/stringToColor";
import PersonOffIcon from '@mui/icons-material/PersonOff';
import PersonIcon from '@mui/icons-material/Person';
import {useRouter} from "next/navigation";

function UserMenu() {

    const userContext = useContext(UserContext);
    const router = useRouter();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [menuTooltipText, setMenuTooltipText] = React.useState('Not logged in');
    const [menuItems, setMenuItems] = React.useState([]);

    useEffect(() => {

        if(!userContext.user) { // no user...
            setMenuTooltipText('Not logged in');
            setMenuItems([
                {'label' : 'Log In Anonymously (no account required)', 'action' : userContext.loginAsAnonymousUser },
            ]);
            return;
        }

        const myUserDetailsItem = {
            label: "My User Details",
            action: () => { router.push('/my-user'); }
        };

        const logOutItem = {'label' : 'Log Out', 'action' : userContext.logoutUser };

        if(userContext.user.isAnonymous) { // no user...
            setMenuTooltipText('Logged in anonymously');
            setMenuItems([
                myUserDetailsItem,
                logOutItem,
            ]);
            return;
        }

        setMenuTooltipText(userContext.user.username + ' logged in');
        setMenuItems([
            myUserDetailsItem,
            logOutItem,
        ]);

    }, [userContext.user])

    const handleMenuItemClicked = (menuItem) => {

        if(menuItem.action !== null) {
            menuItem.action();
        }

        handleCloseUserMenu();
    }

    const avatarColor = () => {
        if(!userContext.user) { // no user...
            return '#bbbbbb';
        }

        if(userContext.user.isAnonymous) { // anon user...
            return '#053721';
        }

        return stringToColor(userContext.user.username);
    }

    const avatarInner = () => {
        if(!userContext.user) { // no user...
            return (<PersonOffIcon/>)
        }

        if(userContext.user.isAnonymous) { // anon user...
            return (<PersonIcon/>)
        }

        return (
            <>{userContext.user.charAt(0)}</>
        );
    }

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <Tooltip title={menuTooltipText}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar sx={{ bgcolor: avatarColor() }}>
                        {avatarInner()}
                    </Avatar>
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {menuItems.map((menuItem) => (
                    <MenuItem key={menuItem.label} onClick={() => handleMenuItemClicked(menuItem)}>
                        <Typography textAlign="center">
                            {menuItem.label}
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}

export default UserMenu;