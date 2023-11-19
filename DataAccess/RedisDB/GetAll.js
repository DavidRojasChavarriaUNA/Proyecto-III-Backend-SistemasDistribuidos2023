'use strict';

const {
    clientRedisBD
} = require('./ClientDB');

exports.GetAll = async (keyBase) => {
    const keys = await clientRedisBD.keys(`${keyBase}*`);
    console.log({keys});
    const data = await clientRedisBD.mget(keys);
    return data;
}