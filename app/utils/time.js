
const styleTime = (date) => {

    // Convertir a un objeto de fecha
    const newDate = new Date(date);
    
    // // Restar 6 horas (en milisegundos)
    // newDate.setHours(newDate.getHours() -6);
    
    // Formatear la hora en formato 12 horas con AM/PM
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZone: 'America/Chicago' // Zona horaria Central Time
    };
    
    // Obtener la hora formateada
    const formattedTime = new Intl.DateTimeFormat('en-US', options).format(newDate);
    
    return `${formattedTime} CT`
}

export default styleTime;