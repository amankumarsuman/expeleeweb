import { Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import ActionAreaCard from "./Cards";
import EventsAttended from "./EventHeaders";
import "./eventsStyle.css";

const EventList = ({ events }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      <EventsAttended />
      <div className="event-list">
        {events.map((event, index) => (
          <div style={{ display: "flex" }}>
            {/* <Paper
            elevation={6}
            key={index}
            className={`event ${show ? "show" : ""}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <small>{event.date}</small>
          </Paper> */}
            <ActionAreaCard events={event} />
          </div>
        ))}
      </div>
    </>
  );
};

export default EventList;
