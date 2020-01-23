const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function formatDate(date) {
    const day = days[date.getDay()];
    const hour = date.getHours() % 12;
    return `${day} ${hour}${hour < 12 ? 'am' : 'pm'}`;
}
