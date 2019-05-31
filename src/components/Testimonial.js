import React from "react";
import { Typography, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    light: "#ff1744"
  }
});

const Testimonial = props => {
  return (
    <div style={{ marginTop: 50 }}>
      <Typography component="h5" variant="h5" color="inherit" gutterBottom>
        Testimonials
      </Typography>

      <Typography variant="body1">
        The following testimonials are from students who frequently used the
        service.
      </Typography>

      <br />

      <Typography
        variant="h6"
        gutterBottom
        style={{ color: theme.palette.light }}
      >
        How has EPTS helped you?
      </Typography>

      <Typography variant="body1">
        "EPTS has helped me to better understand each professorâ€™s style of
        questions, and what to focus on to succeed in my courses. It has also
        helped me have a thorough understanding of my courses which would not
        have been possible with just lectures and tutorials." "The tutors help
        us with basic knowledge of each class by going through everything before
        giving us examples from past midterms and assignments with different
        difficulty levels. Also, we have the chance of having review sessions
        before exams outside of the EPTS hours. This really helps us be well
        prepared for our midterms and finals."
      </Typography>

      <br />

      <Typography
        variant="h6"
        gutterBottom
        style={{ color: theme.palette.light }}
      >
        Do you think peer tutors (opposed to Graduate students or TAs) are able
        to provide the level of understanding needed to provide effective
        tutoring?
      </Typography>

      <Typography variant="body1">
        "Absolutely, peer tutors have experienced the difficulties that students
        face first-hand and offer a better perspective on concepts which are
        harder to grasp. They also know the workload and offer great advice on
        how to go about every course, and how much time to dedicate to every
        course." "Yes, they are because they can explain the material with a
        different perspective. They have gone through the same courses as us,
        they know our teachers and what they are expecting from us. Also, my
        tutor always came prepared to each EPTS session. He always reviews the
        material to make sure he will be able to answer our questions as best as
        he can. We find EPTS sessions extremely useful."
      </Typography>

      <br />

      <Typography
        variant="h6"
        gutterBottom
        style={{ color: theme.palette.light }}
      >
        What changes would you like to see in EPTS to better help you understand
        course content?
      </Typography>

      <Typography variant="body1">
        "The EPTS tutors this year did an excellent job to help us understand
        the course content. I donâ€™t think there is any change Iâ€™d like to
        see when it comes to the method of tutoring. Although, it would be great
        to have a booklet for every course with notes and practice problems." "I
        will like EPTS to provide new markers, so we can read what is on the
        board easier. Furthermore, larger rooms for EPTS sessions will be
        beneficial (seeing that there are sometimes not enough seats for
        everyone during midterm/finals season). Lastly, offering this service
        for the upper years (U2, U3, etc.) will really help everyone out."
      </Typography>
    </div>
  );
};

export default Testimonial;
