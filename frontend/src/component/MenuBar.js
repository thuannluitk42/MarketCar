import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import MuiAppBar from "@mui/material/AppBar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import Avatar from '@mui/material/Avatar';
import adminAvatar from '../images/avatar.png';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const designerOne = {
    src: adminAvatar
  }
export default function MenuBar() {

    const theme = useTheme();
    //const [open, setOpen] = React.useState(true);
    const [open] = React.useState(true);
    const [openSubmenuAvatar, setOpenSubmenuAvatar] = React.useState(false);
    const handleClickSubmenuAvatar = () => {
        setOpenSubmenuAvatar(!openSubmenuAvatar);
      };
    return (
        <AppBar position="fixed" open={open} sx={{ bgcolor: 'GrayText', marginLeft: 'auto' }}>
            <Toolbar>
                {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <ChevronRightIcon />

          </IconButton> */}


                <ListItemButton onClick={handleClickSubmenuAvatar} >
                    <ListItemIcon sx={{ color: "white" }}>
                        <ReportGmailerrorredIcon />
                        <NotificationsNoneIcon />
                        <Avatar src={designerOne.src} sx={{ width: 24, height: 24, marginLeft: 1, marginRight: 1 }} />
                    </ListItemIcon>
                    <ListItemText primary="Admin" sx={{ color: "white" }} style={{ marginLeft: "auto" }} justify="flex-end" />
                    {openSubmenuAvatar ? (
                        <ExpandLess sx={{ color: "white", ...(!open && { display: "none" }) }} />
                    ) : (
                        <ExpandMore sx={{ color: "white", ...(!open && { display: "none" }) }} />
                    )}
                </ListItemButton>

            </Toolbar>
        </AppBar>
    );
}