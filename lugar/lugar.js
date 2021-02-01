const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=f31138821d34dbe228ad0e8f6c331d6e`,
        headers: {}
    })

    const respuesta = await instance.get()

    if (respuesta.data === null) {

        throw new Error(`No hay resultados para ${dir}`);

    }

    const data = respuesta.data;

    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {

        direccion,
        lat,
        lng
    }

};

module.exports = {

    getLugarLatLng

}