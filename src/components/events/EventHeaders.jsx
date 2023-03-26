import React from "react";
import Paper from "@material-ui/core/Paper";
import "./eventsStyle.css"; // import the CSS file
import EventTable from "./EventTable";

const EventsAttended = () => {
  return (
    <Paper className="root" elevation={3}>
      <h1 style={{ color: "white" }}>Web 3 Events</h1>
      {/* Add your events list or cards here */}

      <EventTable/>
    </Paper>
  );
};

export default EventsAttended;
