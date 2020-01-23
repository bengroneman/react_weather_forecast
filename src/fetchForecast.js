export default async function fetchForecast(q) {
    // https://openweathermap.org/forecast5
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(q)}&units=imperial&APPID=e2215f02d2e8308870ff32b020df1a13`;
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (e) {
        console.error(e);
        return false;
    }
}
