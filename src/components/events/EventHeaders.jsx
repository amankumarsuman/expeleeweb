import React from "react";
import Paper from "@material-ui/core/Paper";
import "./eventsStyle.css"; // import the CSS file
import EventTable from "./EventTable";

const EventsAttended = () => {
  return (
    <div className="root" >
      <h1 style={{ color: "#3d75ed",fontWeight:"bold" }}>Web 3 Events</h1>
      {/* Add your events list or cards here */}

      {/* <EventTable/> */}
    </div>
  );
};

export default EventsAttended;
