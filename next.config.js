require('dotenv').config();
const path = require('path');
const { sizes } = require('./payload/blocks/Image/sizes.json');

module.exports = {
  publicRuntimeConfig: {
    SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  },
  images: {
    domains: [
      'localhost',
      // Your domain(s) here
    ],
    deviceSizes: sizes,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
