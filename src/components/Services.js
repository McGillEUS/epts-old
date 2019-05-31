import React from "react";
import { Typography, createMuiTheme } from "@material-ui/core";
import Courses from "./Courses";

const theme = createMuiTheme({
  palette: {
    light: "#ff1744"
  }
});

const Services = props => {
  return (
    <div style={{ marginTop: 50 }}>
      <Typography component="h5" variant="h5" color="inherit" gutterBottom>
        Services Offered
      </Typography>

      <br />

      <Typography
        variant="h6"
        gutterBottom
        style={{ color: theme.palette.light }}
      >
        General Info
      </Typography>

      <Typography variant="body1">
        The Engineering Peer Tutoring Service (EPTS) offers free help for U0 and
        U1 students in Mechanical, Civil, Chemical, Electrical/Computer, and
        Materials. EPTS also provides help with U0/U1 Math, MATLAB and COMP
        courses for all engineering students. Tutors hold fixed office hours
        every week in FDA 6B (see schedule to find out what this semester's
        office hours are). There are tutors for each of the subjects mentioned
        above. Students are welcome to drop in during their office hours to ask
        any questions regarding the courses mentioned below.
      </Typography>
      <br />

      <Typography variant="h6" gutterBottom style={{ color: theme.palette.light }}>
        How will tutors help?
      </Typography>

      <Typography variant="body1">
        Tutors are available to help students with relevant course material,
        assignments and any general engineering-related subject. The help
        provided is mostly one-on-one. Tutors are all students who have taken
        the U0 and/or U1 course load of their department. They are a great
        resource for not only course-related questions, but also for general
        advice. Tutors may also hold review sessions before midterms and final
        exams, subject to demand in the office hours.
      </Typography>

      <br />

      <Typography variant="h6" gutterBottom style={{ color: theme.palette.light }}>
        Courses covered
      </Typography>

      <Courses />
    </div>
  );
};

export default Services;
