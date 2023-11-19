'use strict';

const {
    clientRedisBD
} = require('./ClientDB');

exports.GetOne = async (keyBase, id) => {
    await clientRedisBD.connect();
    const dataText = await clientRedisBD.get(`${keyBase}${id}`);
    const data = JSON.parse(dataText);
    return data;
}