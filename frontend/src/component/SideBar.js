import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import MenuBar from "./MenuBar";

import Content from "./Content";

const drawerWidth = 240;


const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justify: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));



export default function SideBar() {
  const theme = useTheme();
  //const [open, setOpen] = React.useState(true);
  const [open] = React.useState(true);
  const [openSubmenu, setOpenSubmenu] = React.useState(false);
  const [isHover, setIsHover] = React.useState(false);
  const [isHoverFolder, setIsHoverFolder] = React.useState(false);
  const [isHoverTask, setIsHoverTask] = React.useState(false);
  const [isHoverModules, setIsHoverModules] = React.useState(false);
  const [isHoverNotification, setIsHoverNotification] = React.useState(false);
  const [isHoverSetting, setIsHoverSetting] = React.useState(false);

  const handleMouseCarBrand = () => {
    setIsHover(true);
  };

  const handleMouseLeaveCarBrand = () => {
    setIsHover(false);
  };

  const handleMouseFolder = () => {
    setIsHoverFolder(true);
  };

  const handleMouseLeaveFolder = () => {
    setIsHoverFolder(false);
  };

  const handleMouseTask = () => {
    setIsHoverTask(true);
  };

  const handleMouseLeaveTask = () => {
    setIsHoverTask(false);
  };

  const handleMouseModules = () => {
    setIsHoverModules(true);
  };

  const handleMouseLeaveModules = () => {
    setIsHoverModules(false);
  };

  const handleMouseNotification = () => {
    setIsHoverNotification(true);
  };

  const handleMouseLeaveNotification = () => {
    setIsHoverNotification(false);
  };

  const handleMouseSetting = () => {
    setIsHoverSetting(true);
  };

  const handleMouseLeaveSetting = () => {
    setIsHoverSetting(false);
  };

  const useStyles = {
    borderRadius: 8,
    padding: 10,
    marginLeft: 10,
    margin: 10,
    background: isHover ? "#0F5EDD" : "#323435",
  };

  const useStylesFolder = {
    borderRadius: 8,
    padding: 10,
    marginLeft: 10,
    margin: 10,
    background: isHoverFolder ? "#0F5EDD" : "#323435",
  };

  const useStylesTask = {
    borderRadius: 8,
    padding: 10,
    marginLeft: 10,
    margin: 10,
    background: isHoverTask ? "#0F5EDD" : "#323435",
  };

  const useStylesModules = {
    borderRadius: 8,
    padding: 10,
    marginLeft: 10,
    margin: 10,
    background: isHoverModules ? "#0F5EDD" : "#323435",
  };

  const useStylesNotification = {
    borderRadius: 8,
    padding: 10,
    marginLeft: 10,
    margin: 10,
    background: isHoverNotification ? "#0F5EDD" : "#323435",
  };

  const useStylesSetting = {
    borderRadius: 8,
    padding: 10,
    marginLeft: 10,
    margin: 10,
    background: isHoverSetting ? "#0F5EDD" : "#323435",
  };

  const handleClick = () => {
    setOpenSubmenu(!openSubmenu);
  };


  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <Box sx={{ display: "flex" }}>
      <MenuBar />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ bgcolor: "#323435" }}>
          {/* <IconButton onClick={handleDrawerClose}> */}
          <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon sx={{ color: "white" }} />
            ) : (
              <ChevronLeftIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <List sx={{ bgcolor: "#323435", height: 1 }}>
          <ListItemButton style={useStyles} onMouseEnter={handleMouseCarBrand} onMouseLeave={handleMouseLeaveCarBrand}>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justify: "center",
                color: "white",
              }}
            >
              <AirportShuttleOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Car Brand"
              sx={{ opacity: open ? 1 : 0, color: "white" }}
            />
          </ListItemButton>

          <ListItemButton onClick={handleClick} style={useStylesFolder} onMouseEnter={handleMouseFolder} onMouseLeave={handleMouseLeaveFolder}>
            <ListItemIcon sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justify: "center",
              color: "white",
            }}>
              <FolderSharedOutlinedIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText
              primary="Folder"
              sx={{ opacity: open ? 1 : 0, color: "white" }}
            />
            {openSubmenu ? (
              <ExpandLess sx={{ color: "white", ...(!open && { display: "none" }) }} />
            ) : (
              <ExpandMore sx={{ color: "white", ...(!open && { display: "none" }) }} />
            )}
          </ListItemButton>
          <Collapse in={openSubmenu} timeout="auto" unmountOnExit>
            <Timeline sx={{ [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 2 }, color: "white", ...(!open && { display: "none" }), }}>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Menu Item</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Menu Item</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Menu Item</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Menu Item</TimelineContent>
              </TimelineItem>
            </Timeline>
          </Collapse>

          <ListItemButton style={useStylesTask} onMouseEnter={handleMouseTask} onMouseLeave={handleMouseLeaveTask}>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justify: "center",
                color: "white",
              }}
            >
              <FolderSharedOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Tasks"
              sx={{ opacity: open ? 1 : 0, color: "white" }}
            />
          </ListItemButton>

          <ListItemButton style={useStylesModules} onMouseEnter={handleMouseModules} onMouseLeave={handleMouseLeaveModules}>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justify: "center",
                color: "white",
              }}
            >
              <FolderSharedOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Modules"
              sx={{ opacity: open ? 1 : 0, color: "white" }}
            />
          </ListItemButton>

          <ListItemButton style={useStylesNotification} onMouseEnter={handleMouseNotification} onMouseLeave={handleMouseLeaveNotification}>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justify: "center",
                color: "white",
              }}
            >
              <FolderSharedOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Notification"
              sx={{ opacity: open ? 1 : 0, color: "white" }}
            />
          </ListItemButton>


        </List>
        <Divider />
        <List sx={{ bgcolor: "#323435", color: "white" }}>
          <ListItemButton style={useStylesSetting} onMouseEnter={handleMouseSetting} onMouseLeave={handleMouseLeaveSetting}>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justify: "center",
                color: "white",
              }}
            >
              <SettingsSuggestOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Setting"
              sx={{ opacity: open ? 1 : 0, color: "white" }}
            />
          </ListItemButton>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Content />
      </Box>
    </Box>
  );
}
