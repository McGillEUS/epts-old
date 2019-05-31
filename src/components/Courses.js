import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});



function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Department</TableCell>
            <TableCell>Supported Course</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>Chemical Engineering</TableCell>
            <TableCell>CHEE 200, CHEE 204, CHEE 220, CHEE 231</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Civil Engineering</TableCell>
            <TableCell>CIVE 205, CIVE 206, CIVE 207, CIVE 290</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>ECSESS</TableCell>
            <TableCell>ECSE 200, ECSE 210, ECSE 221</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Mechanical Engineering</TableCell>
            <TableCell> MECH 210, MECH 220,MECH 240</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>U0 Math</TableCell>
            <TableCell>MATH 133, MATH 140, MATH 141</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>U1 Math</TableCell>
            <TableCell>MATH 262, MATH 263, MATH 264</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>PDE</TableCell>
            <TableCell>MATH 271</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>U0 Physics</TableCell>
            <TableCell>PHYS 131, PHYS 142</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Computer Science</TableCell>
            <TableCell>COMP 202, COMP 208, MATLAB</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Materials Engineering</TableCell>
            <TableCell>MIME 209, MIME 212</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
