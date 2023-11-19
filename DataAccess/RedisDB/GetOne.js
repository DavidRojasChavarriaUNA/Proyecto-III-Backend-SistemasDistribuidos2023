'use strict';

const {
    clientRedisBD
} = require('./ClientDB');

exports.GetOne = async (keyBase, id) => {
    const dataText = await clientRedisBD.get(`${keyBase}${id}`);
    const data = JSON.parse(dataText);
    return data;
}