const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function formatDate(date) {
    const day = days[date.getDay()];
    const hour = date.getHours();
    const non_zero_hour = (((hour + 11) % 12) + 1);
    return `${day} ${non_zero_hour}${hour < 12 ? 'am' : 'pm'}`;
}
