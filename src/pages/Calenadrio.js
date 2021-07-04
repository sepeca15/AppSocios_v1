import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {CalendarEvent} from '../components/CalendarEvent'
import Swal from "sweetalert2";

const Calendario = () => {
  const localizer = momentLocalizer(moment);
  /* Formato de aniversario Año-Mes-dia 2021-7-3 */
  const event = [ 
    {
      title: "Nombre empresa",
      start: moment("2021-7-3"),
      end: moment("2021-7-3"),
    },
  ];
  const onSelectEvent = (e) => {
    Swal.fire({
      title: "Hoy es el aniversario de:" + event[0].title,
      text: "¡HoyHoyHoyHoyHoyHoyHoyHoyHoyHoyHoyHoy!",
      type: "succes",
    })
  };
  const onViewChange = (e) => {
    console.log("hola");
  };
  

  return (
    <div className=" relative w-full h-full ">
      <div>
        <Calendar
          onSelectEvent={onSelectEvent}
          events={event}
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, minHeight: 500 }}
          messages={{
            allDay: "Todo el día",
            previous: "<",
            next: ">",
            today: "Hoy",
            month: "Mes",
            week: "Semana",
            day: "Día",
            agenda: "Agenda",
            date: "Fecha",
            time: "Hora",
            event: "Evento",
            noEventsInRange: "No hay eventos en este rango",
            showMore: (total) => `+ Ver más (${total})`,
          }}
          onView={onViewChange}
          /*  eventPropGetter={eventStyleGetter} */
          components={{
            event: CalendarEvent,
          }} 
        />
      </div>
    </div>
  );
};

export default Calendario;
