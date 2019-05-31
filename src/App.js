import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Tutors from "./components/Tutors";
import Footer from "./components/Footer";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial"
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  withStyles,
  Typography,
  createMuiTheme,
  Grid
} from "@material-ui/core";

import "./App.css";

const theme = createMuiTheme({
  palette: {
    red: "#ff1744",
    black: "#000000"
  }
});

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between"
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up("md")]: {
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3
  },
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
    backgroundColor: "green"
  },
  footer: {
    backgroundColor: theme.palette.grey[0],
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`
  }
});

const App = props => {
  return (
    <Router>
      <Grid container style={{ position: "sticky" }}>
        <div className={props.classes.layout}>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/tutors" component={Tutors} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/testimonials" component={Testimonial}/>        

          <Footer />
        </div>
      </Grid>
    </Router>
  );
};

export default withStyles(styles)(App);
