import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarEvent } from "../components/CalendarEvent";
import Swal from "sweetalert2";
import { getEmpresasAniversarios } from "../store/actions/empresas";
import { useSelector, useDispatch } from "react-redux";

const Calendario = () => {
  const empresasAniversarios = useSelector(
    (state) => state.empresas.empresaAniversario
  );
  const dispatch = useDispatch(); 
  const localizer = momentLocalizer(moment); 
  const [fechas, setFechas] = useState([]);
 
  useEffect(() => {
    console.log("estoy");
    dispatch(getEmpresasAniversarios());
    setFechas(empresasAniversarios);
  }, []);
  
  const event = fechas?.map((element, id) => {
    return {
      title: element.nombre,
      start: moment(element.fecha),
      end: moment(element.fecha).add(23, "hours")
    };
  });
  const onSelectEvent = (e) => {
    console.log(e);
    Swal.fire({
      title: "🎉Hoy es el aniversario de 🎉" + e.title ,
      text: "🎊¡No olvides saludar!🎊",
    });
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
