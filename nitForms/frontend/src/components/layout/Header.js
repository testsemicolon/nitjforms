import React, { Component } from "react";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Buttons from "./Buttons";
import Notifications from "../createForm/Notifications";

const drawerWidth = 250;

const useStyles = makeStyles((Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      transition: Theme.transitions.create(["margin", "width"], {
        easing: Theme.transitions.easing.sharp,
        duration: Theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: Theme.transitions.create(["margin", "width"], {
        easing: Theme.transitions.easing.easeOut,
        duration: Theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: Theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      // necessary for content to be below app bar
      ...Theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      transition: Theme.transitions.create("margin", {
        easing: Theme.transitions.easing.sharp,
        duration: Theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: Theme.transitions.create("margin", {
        easing: Theme.transitions.easing.easeOut,
        duration: Theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })
);

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const Theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position="absolute"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar
          style={{
            backgroundColor: "#0A5C5A",
            color: "white",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            // style={{ backgroundColor: "pink" }}
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

          <Link to="/">
            <img
              src="static/Logo.png"
              style={{ width: "4vw", heigth: "4vw", marginRight: "1vw" }}
            />
          </Link>
          {"  "}
          <h2 style={{ fontSize: "1.2vw", color: "white", marginTop: ".8vw" }}>
            DR. B.R AMBEDKAR
            <br />
            {/* </h2>
          <h2 style={{ fontSize: "1vw", color: "white", marginTop: ".1vw" }}> */}
            <font style={{ fontSize: "1.5vw" }}>
              NATIONAL INSTITUTE OF TECHNOLOGY,JALANDHAR
            </font>
          </h2>
          {/* <stylee style={{marginRight:"auto"}}><Notifications/></stylee> */}
          {/* <Notifications/> */}

          <Buttons />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {Theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <List
          style={{
            fontSize: "1.5vw",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {/* <ListItem style={{ fontSize: "1.5vw" }}>Account Details</ListItem> */}
          <ListItem>
            <Link to="/profilepage">
              {" "}
              <img
                src="../../../static/avtar.png"
                style={{ borderRadius: "50%" }}
              />
            </Link>
          </ListItem>
          <ListItem
            style={{ fontSize: "1vw", marginLeft: "auto", marginRight: "auto" }}
          >
            Email:abc@gmail.com
          </ListItem>
          <ListItem
            style={{
              fontSize: "1vw",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Phone no
          </ListItem>
          <ListItem style={{ fontSize: "1vw" }}>Department</ListItem>
        </List>

        <Divider />
        <List style={{ fontSize: "1.5vw" }}>
          <ListItem>Create</ListItem>
          <ListItem>Edit/Delete</ListItem>
          <Link to="/previousforms">
            <ListItem>View Previous</ListItem>
          </Link>
          <ListItem>Drafts</ListItem>
        </List>
        <Divider />
        <List style={{ fontSize: "1.5vw" }}>
          <Link to="/outbox">
            <ListItem>OutBox</ListItem>
          </Link>
        </List>

        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph></Typography>
        <Typography paragraph></Typography>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.Auth,
});
