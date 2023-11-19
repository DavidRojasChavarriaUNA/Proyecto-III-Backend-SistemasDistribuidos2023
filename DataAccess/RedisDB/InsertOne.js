'use strict';

const {
    clientRedisBD
} = require('./ClientDB');

exports.InsertOne = async (keybase, data) => {
    data._id = new Date().getTime();
    const result = await clientRedisBD.set(`${keybase}${data._id}`,data);
    if(result !== 'OK')
        throw 'No se pudo crear el registro.';
    return {
        insertedId: data._id
    };
}