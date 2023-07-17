import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(
            `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_X_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_X_HOST
            }
        });

        return data;

    } catch (error) {
        console.log(error);
    }
}

export const getWeatherData = async (lat, lng) => {
    try {
        const { data } = await axios.get(process.env.REACT_APP_WEATHER_URL, {
             params: { lat: lat, lon: lng},
             headers: {
                 'X-RapidAPI-Key': process.env.REACT_APP_X_KEY,
                 'X-RapidAPI-Host': process.env.REACT_APP_WEATHER_HOST
             }
        });

        return data;

    } catch (error) {
        console.log(error)
    }
}