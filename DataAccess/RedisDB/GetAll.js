'use strict';

const {
    clientRedisBD
} = require('./ClientDB');

exports.GetAll = async (keyBase) => {
    try {
        await clientRedisBD.connect();
        const keys = await clientRedisBD.keys(`${keyBase}*`);
        const data = await clientRedisBD.mget(keys);
        return data;
    } finally {
        await clientRedisBD.quit();
    }
}