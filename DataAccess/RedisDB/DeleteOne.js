'use strict';

const {
    clientRedisBD
} = require('./ClientDB');

exports.DeleteOne = async (keyBase, id) => {
    const deletedCount = await clientRedisBD.del(`${keyBase}${id}`);
    return {
        deletedCount
    };
}