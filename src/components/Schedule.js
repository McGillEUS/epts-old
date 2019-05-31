import React from "react";
import { Typography, createMuiTheme, Grid } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    light: "#ff1744"
  }
});

const Schedule = props => {
  return (
    <div>
      <Grid direction="row" justifyContent="center" justify="center" alignContent="center" alignItems="center">
        <img
          src={require("../images/Winter_2019_V2_2.png")}
          style={{ width: "100%", height: "auto", borderRadius: "15px" }}
        />
      </Grid>
    </div>
  );
};

export default Schedule;
