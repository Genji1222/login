import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Button, InputBase, Paper } from "@mui/material";
import { Directions, Search } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./dashboard.js";
const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(() => ({
  textAlign: "center",
  paddingTop: 50,
}));

export default function PersistentDrawerLeft() {
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState(1);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setCount(count + 1);
    if (count === 1) {
      setOpen(true);
    }
    if (count === 2) {
      setOpen(false);
      setCount(1);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>

          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 200,
              height: 30,
              marginLeft: 1,
              border: 1,
              borderColor: "rgba(36, 32, 32, 0.128)",
            }}
          >
            <IconButton
              type="button"
              sx={{ p: "15px", width: "10px" }}
              aria-label="search"
            >
              <Search sx={{ width: 40 }} />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Ctrl+k"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography variant="h4" gutterBottom>
            MarkView
          </Typography>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
        </List>
        <Divider />
        <List>
          <Typography sx={{ fontSize: "12px", paddingLeft: 2 }} gutterBottom>
            Authentication
          </Typography>

          <ListItemButton onClick={() => navigate("/")}>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary={"login"} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <AppRegistrationIcon />
            </ListItemIcon>
            <ListItemText primary={"register"} />
          </ListItemButton>
        </List>
        <List>
          <Typography sx={{ fontSize: "12px", paddingLeft: 2 }} gutterBottom>
            Grade management
          </Typography>
          <ListItemButton>
            <ListItemIcon>
              <MarkunreadIcon />
            </ListItemIcon>
            <ListItemText primary={"Mark Input"} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <MarkunreadIcon />
            </ListItemIcon>
            <ListItemText primary={"Mark Update"} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <MarkunreadIcon />
            </ListItemIcon>
            <ListItemText primary={"Mark Delete"} />
          </ListItemButton>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Dashboard/>
        
      </Main>
    </Box>
  );
}
