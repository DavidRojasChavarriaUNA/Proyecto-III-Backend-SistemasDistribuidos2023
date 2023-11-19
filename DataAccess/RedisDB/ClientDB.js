'use strict';

const {
    Redis
} = require('ioredis');

const client = new Redis(process.env.REDIS_DB_URI);

exports.clientRedisBD = client;