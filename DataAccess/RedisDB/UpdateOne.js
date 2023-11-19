'use strict';

const {
    clientRedisBD
} = require('./ClientDB');

exports.UpdateOne = async (keybase, id, data) => {  
    const dataText = JSON.stringify(data);
    const result = await clientRedisBD.set(`${keybase}${id}`, dataText);
    if(result !== 'OK')
        throw 'No se pudo modificar el registro.';
    return {
        modifiedCount: 1,
        matchedCount: 1
    };
}