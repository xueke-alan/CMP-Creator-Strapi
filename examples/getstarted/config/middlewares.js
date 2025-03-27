'use strict';

const responseHandlers = require('./src/response-handlers');

module.exports = [
  // 'strapi::logger',
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "caihuasujiao-1347960681.cos.ap-guangzhou.myqcloud.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "caihuasujiao-1347960681.cos.ap-guangzhou.myqcloud.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
      //新增：解决 CDN 跨域问题，不添加会导致后台图片 403
      referrerPolicy: {
        policy: 'origin-when-cross-origin',
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  // 'strapi::compression',
  // 'strapi::ip',
  {
    name: 'strapi::responses',
    config: {
      handlers: responseHandlers,
    },
  },
  'strapi::favicon',
  'strapi::public',
  {
    resolve: './src/custom/middleware.js',
    config: {},
  },
];
