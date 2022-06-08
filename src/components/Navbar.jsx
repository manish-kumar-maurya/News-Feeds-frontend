import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import Avatar from '@mui/material/Avatar';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
} from "@material-ui/core";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    menuPaper: {
        backgroundColor: "#1d1d27",
    },
}));
const Navbar = () => { 
    const classes = useStyles();
    const guestLinks = (
        <Toolbar>
            <AssignmentTurnedInIcon color="primary" />
            <Typography variant="h6" className={classes.title} color="primary">
             Hi User
            </Typography>
            <Link to="/signup" style={{ color: "white", "text-decoration": "none" }}>
                <Button color="primary">Register</Button>
            </Link>
            <Link to="/" style={{ color: "white", "text-decoration": "none" }}>
                <Button color="primary">Posts</Button>
            </Link>
            
        </Toolbar>
    );
    
    return (
        <AppBar position="static" color="secondary" elevation="0">
            
                <Fragment>{ guestLinks}</Fragment>
          
        </AppBar>
    );
};
export default Navbar;