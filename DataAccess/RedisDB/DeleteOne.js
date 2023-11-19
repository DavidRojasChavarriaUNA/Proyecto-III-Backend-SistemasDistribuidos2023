'use strict';

const {
    clientRedisBD
} = require('./ClientDB');

exports.DeleteOne = async (keyBase, id) => {
    try {
        await clientRedisBD.connect();
        const deletedCount = await clientRedisBD.del(`${keyBase}${id}`);
        return {
            deletedCount
        };
    } finally {
        await clientRedisBD.quit();
    }
}