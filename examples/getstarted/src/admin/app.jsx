import React from 'react';

import { Button } from '@strapi/design-system';

import { registerPreviewRoute } from './preview';

const config = {
  locales: ['zh-Hans','en'],
};

export default {
  config,
  register: (app) => {
    registerPreviewRoute(app);
  },
};
