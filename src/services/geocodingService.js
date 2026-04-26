export const getGeoposition = async (name) => {
  const params = {
    name: name,
    count: 10,
    format: 'Json',
    language: 'Russian'
    // ,apikey: '',
    // countyCode: ''
};
const encodedName = encodeURIComponent(name); 
const url = "https://geocoding-api.open-meteo.com/v1/search?name="+ encodedName + "&count=10&language=ru&format=json";
const response = await fetch(url);
if (!response.ok) throw new Error('Ошибка сети');
    
    const data = await response.json();

    return data.results;
}