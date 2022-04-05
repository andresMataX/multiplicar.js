const {
    crearArchivo
} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
// const argv = require('yargs').argv;


// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// console.log(process.argv);
// console.log(argv);

crearArchivo(argv.b, argv.l, argv.h).then(text => {
    console.log(colors.green(text));
}).catch(console.warn);