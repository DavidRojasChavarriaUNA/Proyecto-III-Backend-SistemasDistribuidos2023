'use strict';

const {
    clientRedisBD
} = require('./ClientDB');

exports.GetOne = async (keyBase, id) => {
    await clientRedisBD.connect();
    const data = await clientRedisBD.get(`${keyBase}${id}`);
    return data;
}