const styleDate = (date) => {
    const shortDate = date.slice(0,10);
    const dateParts = shortDate.split('-')
    const day = dateParts[2];
    const month = getMonth(dateParts[1]);
    const year = dateParts[0];

    return `${day} de ${month}, ${year}`
    
}

const getMonth = (month) => {
    let mes;

    switch (month) {
        case "01":
            mes = 'Jan'
            break;
        case "02":
            mes = 'Feb'
            break;
        case "03":
            mes = 'Mar'
            break;
        case "04":
            mes = 'Apr'
            break;
        case "05":
            mes = 'May'
            break;
        case "06":
            mes = 'Jun'
            break;
        case "07":
            mes = 'Jul'
            break;
        case "08":
            mes = 'Aug'
            break;
        case "09":
            mes = 'Sep'
            break;
        case "10":
            mes = 'Oct'
            break;
        case "11":
            mes = 'Nov'
            break;
        case "12":
            mes = 'Dec'
            break;
    }

    return mes;
}

export default styleDate;