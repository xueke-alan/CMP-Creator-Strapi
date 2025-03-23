'use strict';

/**
 * salesman service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::salesman.salesman');
