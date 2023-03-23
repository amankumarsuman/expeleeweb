import React from "react";
import Paper from "@material-ui/core/Paper";
import "./eventsStyle.css"; // import the CSS file

const EventsAttended = () => {
  return (
    <Paper className="root" elevation={3}>
      <h1 style={{ color: "white" }}>Events Attended</h1>
      {/* Add your events list or cards here */}
    </Paper>
  );
};

export default EventsAttended;
