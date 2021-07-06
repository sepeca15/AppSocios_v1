import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarEvent } from "../components/CalendarEvent";
import Swal from "sweetalert2";
import { getEmpresasAniversarios } from "../store/actions/empresas";
import { useSelector, useDispatch } from "react-redux";
import SendHappybirthdatModal from "../components/SendHappybirthdatModal";
import { modalOpen } from "../store/actions/auth";

const Calendario = () => {
  const empresasAniversarios = useSelector(
    (state) => state.empresas.empresaAniversario
  );
  const dispatch = useDispatch();
  const localizer = momentLocalizer(moment);
  const [fechas, setFechas] = useState([]);
  useEffect(() => {
    dispatch(getEmpresasAniversarios());
    setFechas(empresasAniversarios);
  }, []);

  const event = fechas?.map((element, id) => {
    return {
      title: element.nombre,
      start: moment(` ${element.fecha.toString()} 00:00`).format("YYYY-MM-DD HH:mm"),
      end: moment(` ${element.fecha.toString()} 23:59`).format("YYYY-MM-DD HH:mm"),
      email: element?.email
    };
  });
  const onSelectEvent = (e) => {
    dispatch(modalOpen(e));
  };
  const onViewChange = (e) => {
    console.log("hola");
  };

  return (
    <div className=" relative w-full h-full ">
      <SendHappybirthdatModal />
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
