
export const getDate = (isoDate) =>{
    const options = { month: 'long', day: 'numeric', weekday: 'short' };
    const localDate = isoDate.toLocaleDateString('ru-RU', options)
    return localDate;
}
export const getTime = (isoDate) =>{
    const options = {hour: '2-digit', minute: '2-digit'};
    const optionTime = isoDate.toLocaleTimeString('ru-RU', options)
    return optionTime;
}
export const getWindDirection = (number) =>{
    const side = ['C', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'CЗ'];
    const index = Math.round(number/45);
    return side[index];
}
export const getWeatherDescription = (code) => {
    const data = {
        0: "Ясное небо",
        1: "Преимущественно ясно",
        2: "Переменная облачность",
        3: 'Пасмурно',
        45: "Туман",
        48: "Иней",
        51: "Моросящий дождь: легкий",
        53: "Моросящий дождь: умеренный",
        55: "Моросящий дождь: сильный",
        56: "Ледяной дождь: легкий",
        57: "Ледяной дождь: сильный",
        61: "Дождь: слабый",
        63: "Дождь: умеренный",
        65: "Дождь: сильный",
        66: "Ледяной дождь: легкий",
        67: "Ледяной дождь: сильный",
        71: "Снегопад: слабый",
        73: "Снегопад: умеренный",
        75: "Снегопад: сильный",
        77: "Мелкие снежинки",
        80: "Дождь: слабый",
        81: "Дождь: умеренный",
        82: "Дождь: сильный",
        85: "Снежные ливни: слабые",
        86: "Снежные ливни: сильные",
        95: "Гроза",
        96: "Гроза со слабым градом",
        99: "Гроза с сильным градом"
    }
    return data[code] || "";
}