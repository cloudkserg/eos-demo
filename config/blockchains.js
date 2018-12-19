/**
 * Copyright 2017–2018, LaborX PTY
 * Licensed under the AGPL Version 3 license.
 * @author Kirill Sergeev <cloudkserg11@gmail.com>
*/
module.exports = {
  'eth': {
    key: 'eth',
    rabbit: {
      url: process.env.ETH_RABBIT_URI || 'amqp://localhost:5672',
      exchange: process.env.ETH_RABBIT_EXCHANGE || 'events',
      serviceName: process.env.ETH_RABBIT_SERVICE_NAME || 'app_eth' 
    },
    mongo: {
      uri: process.env.ETH_MONGO_URI || 'mongodb://localhost:27017/data',
      collectionPrefix: process.env.ETH_MONGO_COLLECTION_PREFIX || 'eth'
    },
    node: process.env.ETH_NODE || 'http://localhost:8545',
    waitBlockLimit: 2
  },
  'bitcoin': {
    key: 'bitcoin',
    rabbit: {
      url: process.env.BITCOIN_RABBIT_URI || 'amqp://localhost:5672',
      exchange: process.env.BITCOIN_RABBIT_EXCHANGE || 'events',
      serviceName: process.env.BITCOIN_RABBIT_SERVICE_NAME || 'app_bitcoin' 
    },
    mongo: {
      uri: process.env.BITCOIN_MONGO_URI || 'mongodb://localhost:27017/data',
      collectionPrefix: process.env.BITCOIN_MONGO_COLLECTION_PREFIX ||  'bitcoin'
    },
    node: process.env.BITCOIN_NODE || '/tmp/bitcoin',
    fee: 0.03,
    waitBlockLimit: 6
  },
  'nem': {
    key: 'nem',
    rabbit: {
      url: process.env.NEM_RABBIT_URI || 'amqp://localhost:5672',
      exchange: process.env.NEM_RABBIT_EXCHANGE || 'events',
      serviceName: process.env.NEM_RABBIT_SERVICE_NAME || 'app_nem' 
    },
    mongo: {
      uri: process.env.NEM_MONGO_URI || 'mongodb://localhost:27017/data',
      collectionPrefix: process.env.NEM_MONGO_COLLECTION_PREFIX || 'nem'
    },
    waitBlockLimit: 6
  },
  'waves': {
    key: 'waves',
    rabbit: {
      url: process.env.WAVES_RABBIT_URI || 'amqp://localhost:5672',
      exchange: process.env.WAVES_RABBIT_EXCHANGE || 'events',
      serviceName: process.env.WAVES_RABBIT_SERVICE_NAME || 'app_waves' 
    },
    mongo: {
      uri: process.env.WAVES_MONGO_URI || 'mongodb://localhost:27017/data',
      collectionPrefix: process.env.WAVES_MONGO_COLLECTION_PREFIX || 'waves'
    },
    waitBlockLimit: 6
  },
};
