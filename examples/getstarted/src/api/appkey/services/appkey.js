'use strict';

/**
 * appkey service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::appkey.appkey');
