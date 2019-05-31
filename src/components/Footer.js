import React from 'react';
import {Typography, withStyles} from "@material-ui/core"

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.grey[0],
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const Footer = (props) => {
  return (
    <footer className={props.classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Copyright McGill EUS
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Engineering Peer tutoring Services 2019
          </Typography>
        </footer>
  )
}

export default withStyles(styles)(Footer);
