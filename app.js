// REQUIREDS
const clima = require('./clima/clima');
const lugar = require('./lugar/lugar');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad a obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {

    try {

        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `EL clima de ${coords.direccion} es de ${temp}`;

    } catch (e) {

        return `No se pudo obtener el clima de ${direccion}`

    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);