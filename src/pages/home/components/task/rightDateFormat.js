const makeDoubleDigit = (number) => ('' + number).length < 2 ? '0' + number : number;

const RightDateFormat = (date)=> {
    const dateObj = new Date();
    const currentMonth = makeDoubleDigit((dateObj.getMonth() + 1))
    const currentDay = makeDoubleDigit(dateObj.getDate())
    const currentYear = dateObj.getFullYear();

    const sentDate = new Date(date)
    const sentMonth = makeDoubleDigit((sentDate.getMonth() + 1))
    const sentMonthName = sentDate.toLocaleString('default', { month: 'short' }); //months from 1-12
    const sentDay = makeDoubleDigit(sentDate.getDate())
    const sentYear = sentDate.getFullYear();
    const sentHour = sentDate.getHours();
    const sentMinutes = sentDate.getMinutes();

    if (sentYear == currentYear && sentMonth == currentMonth && sentDay == currentDay) return `${sentHour}:${sentMinutes}`
    if (sentYear == currentYear) return `${sentMonthName} ${sentDay}`

    return (`${sentYear}/${sentMonth}/${sentDay}`);
    
}

export default RightDateFormat
