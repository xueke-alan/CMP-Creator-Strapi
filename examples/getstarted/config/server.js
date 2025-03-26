'use strict';

const cronTasks = require('./src/cron-tasks');

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // 必须绑定到 0.0.0.0
  port: env.int('PORT', 1337),
  // url: 'http://localhost:1337', // 关键！此处必须为当前访问的地址或留空
  url: 'http://localhost:1337', // 关键！此处必须为当前访问的地址或留空
  // url: 'http://api.caihuasujiao.com', // 关键！此处必须为当前访问的地址或留空
  cron: {
    enabled: true,
    tasks: cronTasks,
  },
  app: {
    keys: env.array('APP_KEYS', ['toBeModified1', 'toBeModified2']),
  },
  webhooks: {
    // TODO: V5, set to false by default
    // Receive populated relations in webhook and db lifecycle payloads
    // This only populates relations in all content-manager endpoints
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', true),
  },
  // ℹ️ http_proxy is the env var used by system to set proxy globally
  globalProxy: env('http_proxy'),
  http: {
    serverOptions: {
      requestTimeout: 1000 * 60 * 10, // set request timeout to 600000ms (10 minutes)
    },
  },
  transfer: {
    remote: {
      // enabled: false,
    },
  },
  logger: {
    config: {
      level: 'silly',
    },
    updates: {
      // enabled: false,
    },
    startup: {
      // enabled: false,
    },
  },
});
