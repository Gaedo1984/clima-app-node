const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3f278c11068ae0e909881dca47c7f7f7&units=metric`);

    return resp.data.main.temp;

}


module.exports = {

    getClima

}