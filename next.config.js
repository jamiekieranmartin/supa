'use strict';

const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  webpack5: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'node_modules')],
  },
};
