const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function formatDate(date) {
    return `${days[date.getDay()]} ${date.getHours() % 12}${date.getHours() < 12 ? 'am' : 'pm'}`;
}
