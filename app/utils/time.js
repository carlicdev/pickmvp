
// const styleTime = (date) => {

//     // Convertir a un objeto de fecha
//     const newDate = new Date(date);
    
//     // // Restar 6 horas (en milisegundos)
//     // newDate.setHours(newDate.getHours() -6);
    
//     // Formatear la hora en formato 12 horas con AM/PM
//     const options = {
//       weekday: 'long',
//       hour: 'numeric',
//       minute: 'numeric',
//       hour12: true,
//       timeZone: 'America/Chicago' // Zona horaria Central Time
//     };
    
//     // Obtener la hora formateada
//     const formattedTime = new Intl.DateTimeFormat('es-ES', options).format(newDate);
    
//     return `${formattedTime} CT`
// }

// export default styleTime;

const styleTime = (date) => {
  // Convertir a un objeto de fecha
  const newDate = new Date(date);
  
  // Obtener la fecha actual en la misma zona horaria (America/Chicago)
  const currentDate = new Date();
  const optionsDate = { timeZone: 'America/Chicago' };
  const today = new Intl.DateTimeFormat('en-US', optionsDate).format(currentDate);
  const inputDate = new Intl.DateTimeFormat('en-US', optionsDate).format(newDate);
  
  // Verificar si la fecha es hoy
  const isToday = today === inputDate;

  // Opciones para formatear la hora
  const optionsTime = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'America/Chicago'
  };

  // Obtener la hora formateada
  const formattedTime = new Intl.DateTimeFormat('es-ES', optionsTime).format(newDate);

  // Devolver "Hoy" si es el día actual, o el nombre del día si no lo es
  if (isToday) {
    return `Hoy, ${formattedTime} CT`;
  } else {
    // Formatear con el día de la semana
    const optionsWithDay = {
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZone: 'America/Chicago'
    };
    return `${new Intl.DateTimeFormat('es-ES', optionsWithDay).format(newDate)} CT`;
  }
};

export default styleTime;