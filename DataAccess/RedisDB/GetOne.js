'use strict';

const {
    clientRedisBD
} = require('./ClientDB');

exports.GetOne = async (keyBase, id) => {
    try {
        await clientRedisBD.connect();
        const data = await clientRedisBD.get(`${keyBase}${id}`);
        return data;
    } finally {
        await clientRedisBD.quit();
    }
}