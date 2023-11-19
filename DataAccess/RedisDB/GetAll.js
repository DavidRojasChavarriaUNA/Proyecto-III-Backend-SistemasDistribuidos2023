'use strict';

const {
    clientRedisBD
} = require('./ClientDB');

exports.GetAll = async (keyBase) => {
    const keys = await clientRedisBD.keys(`${keyBase}*`);
    let data = undefined;
    if(keys && keys.length)
        data = await clientRedisBD.mget(keys);
    else
        data = [];
    return data;
}