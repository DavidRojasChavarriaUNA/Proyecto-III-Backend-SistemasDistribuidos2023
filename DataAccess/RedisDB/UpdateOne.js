'use strict';

const {
    clientRedisBD
} = require('./ClientDB');

exports.UpdateOne = async (keybase, id, data) => {
    try {
        await clientRedisBD.connect();        
        const result = await clientRedisBD.set(`${keybase}${id}`,data);
        if(result !== 'OK')
            throw 'No se pudo modificar el registro.';
        return {
            modifiedCount: 1,
            matchedCount: 1
        };
    } finally {
        await clientRedisBD.quit();
    }
}