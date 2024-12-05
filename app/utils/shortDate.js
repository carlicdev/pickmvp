const shortDate = (date) => {
    // Convertir la cadena de fecha en un objeto Date
    const newDate = new Date(date);
  
    // Restar 6 horas (en milisegundos)
    newDate.setHours(newDate.getHours() - 6);
  
    // Formatear la fecha
    const day = String(newDate.getDate()).padStart(2, '0'); // Asegura dos dígitos
    const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Los meses son base 0
    const year = newDate.getFullYear();
  
    return `${day}/${month}/${year}`;
  };
  
  export default shortDate;