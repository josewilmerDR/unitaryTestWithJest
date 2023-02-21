// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
let oneDollarIs = {
    "EUR": 0.8, // japan yen
    "JPY": 106.6, // us dollar
    "GBP": 0.6, // british pound
}
let oneYenIs = {
    "EUR": 0.11, // japan yen
    "USD": 0.12, // us dollar
    "GBP": 0.1, // british pound
}

const fromEuroToDollar = (euro) => {
    let result = euro * oneEuroIs["USD"];
    return result;
}

const fromDollarToYen = (dollar) => {
    let result = dollar * oneDollarIs.JPY;
    return result;
}

const fromYenToPound = (yen) => {
    let result = yen * oneYenIs.GBP;
    return result;
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};