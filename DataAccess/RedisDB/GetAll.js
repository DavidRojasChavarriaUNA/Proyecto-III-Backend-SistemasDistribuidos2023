'use strict';

const {
    clientRedisBD
} = require('./ClientDB');

exports.GetAll = async (keyBase) => {
    const keys = await clientRedisBD.keys(`${keyBase}*`);
    let data = undefined;
    if(keys && keys.length){
        const dataCollectionText = await clientRedisBD.mget(keys);
        data = dataCollectionText.map(dataText => JSON.parse(dataText));
    }
    else
        data = [];
    return data;
}