import React from "react";
import {
  Toolbar,
  Typography,
  withStyles,
  CssBaseline,
  Button,
  createMuiTheme
} from "@material-ui/core";
import "../App.css";
import { Link } from "react-router-dom";
import epts from "../images/epts.jpg";

const styles = theme => ({
  root: {
    //backgroundImage: 'linear-gradient(#f85032, #e73827)'
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between"
  }
});

const theme = createMuiTheme({
  palette: {
    red: "#ff1744",
    black: "#000000"
  }
});

const Navbar = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={props.classes.layout} >
        <Toolbar className={props.classes.toolbarMain} style={{justifyContent:"center"}}>
          <img
            src={require("../images/Logo-Text.png")}
            style={{ width: "200px", height: "auto", borderRadius: "5px"}}
          />

          {/* <Typography
            component="h1"
            variant="display3"
            color="inherit"
            align="center"
            noWrap
            className={props.classes.toolbarTitle}
          >
            EPTS
          </Typography> */}
        </Toolbar>

        <Toolbar variant="dense" className={props.classes.toolbarSecondary}>
          <Button
            component={Link}
            to="/"
            style={{ color: theme.palette.red }}
            color="secondary"
          >
            <Typography color="inherit" noWrap>
              Home
            </Typography>
          </Button>

          <Button
            component={Link}
            to="/services"
            style={{ color: theme.palette.red }}
            color="secondary"
          >
            <Typography color="inherit" noWrap>
              Services
            </Typography>
          </Button>

          <Button
            component={Link}
            to="/tutors"
            style={{ color: theme.palette.red }}
            color="secondary"
          >
            <Typography color="inherit" noWrap>
              Tutors
            </Typography>
          </Button>

          <Button
            component={Link}
            to="/schedule"
            style={{ color: theme.palette.red }}
            color="secondary"
          >
            <Typography color="inherit" noWrap>
              Schedule
            </Typography>
          </Button>

          <Button
            component={Link}
            to="/contact-us"
            style={{ color: theme.palette.red }}
            color="secondary"
          >
            <Typography color="inherit" noWrap>
              Contact Us
            </Typography>
          </Button>

          <Button
            component={Link}
            to="/testimonials"
            style={{ color: theme.palette.red }}
            color="secondary"
          >
            <Typography color="inherit" noWrap>
              Testimonials
            </Typography>
          </Button>
        </Toolbar>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Navbar);
