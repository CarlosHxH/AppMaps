import axios from 'axios';

//process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
//'travel-advisor.p.rapidapi.com',
export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
        lang: 'pt_BR',
        units: 'km'
      },
      headers: {
        'x-rapidapi-key': 'c62facb5abmsh7a7d50cf2b4f367p155807jsn880feb08ccf0',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};