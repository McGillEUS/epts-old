import React from "react";
import { Typography, createMuiTheme } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const theme = createMuiTheme({
  palette: {
    light: "#ff1744"
  }
});

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 200,
    width: 300
  }
});

const Contact = props => {
  return (
    <div style={{ marginTop: 50 }}>
      <Typography component="h5" variant="h5" color="inherit" gutterBottom>
        Contact
      </Typography>

      <Typography variant="body1">
        For general inquires feel free to email epts@mcgilleus.ca. Stop by FDA
        6B for our weekly office hours!
      </Typography>

      <br />

      <Typography
        variant="h6"
        gutterBottom
        style={{ color: theme.palette.light }}
      >
        Email
      </Typography>

      <Typography variant="body1">
        You can also email the tutors at the following addresses:
      </Typography>

      <br />

      <Paper className={styles.root}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>Department</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Chemical Engineering</TableCell>
              <TableCell>epts.chem@mcgilleus.ca</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Civil Engineering</TableCell>
              <TableCell>epts.civil@mcgilleus.ca</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>ECSESS</TableCell>
              <TableCell>epts.ecse@mcgilleus.ca</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Mechanical Engineering</TableCell>
              <TableCell>epts.mech@mcgilleus.ca</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>U0 Math</TableCell>
              <TableCell>
                epts.u0math@mcgilleus.ca, epts.u0math2@mcgilleus.ca
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>U1 Math</TableCell>
              <TableCell>
                epts.u1math@mcgilleus.ca, epts.u1math2@mcgilleus.ca
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>PDE</TableCell>
              <TableCell>epts.pdes@mcgilleus.ca</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>U0 Physics</TableCell>
              <TableCell>epts.u0physics@mcgilleus.ca</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Computer Science</TableCell>
              <TableCell>epts.comp@mcgilleus.ca</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Contact;
