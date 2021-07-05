import React from "react";
/* import { useSelector } from "react-redux"; */

const CalendarEvent = ({ event }) => {
  const { title } = event;
  return (
    <div className="rounded-full flex flex-col">
      <strong className="ml-2 ">{title}</strong>
    </div>
  );
};

export {CalendarEvent}
