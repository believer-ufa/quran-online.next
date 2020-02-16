const webpack = require('webpack');
const withStylus = require('@zeit/next-stylus');

require('dotenv').config();

module.exports = withStylus({
  cssModules: true,
  webpack(config) {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    // Returns environment variables as an object
    const environment = Object.keys(process.env).reduce((accumulator, current) => {
      accumulator[`process.env.${current}`] = JSON.stringify(process.env[current]);
      return accumulator;
    }, {});

    /*
     * Allows you to create global constants which can be configured
     * at compile time, which in our case is our environment variables
     */
    config.plugins.push(new webpack.DefinePlugin(environment));

    return config;
  },
});
