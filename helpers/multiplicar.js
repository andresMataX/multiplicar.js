const fs = require('fs');
require('colors');

const crearArchivo = async(base = 5, listar, hasta) => {

    let salida = `------Tabla del ${base}\n`;
    let consola = `------Tabla del ${base}\n`.rainbow;

    for (let i = 1; i < hasta + 1; i++) {
        salida += `${base} ${'x'} ${i} ${'='} ${base * i}\n`;
        consola += `${base} ${'x'.green} ${i} ${'='.blue} ${base * i}\n`;
    }

    if (listar === true) console.log(consola);

    try {
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creada`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}