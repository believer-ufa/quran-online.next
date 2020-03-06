const webpack = require('webpack');
const withPlugins = require('next-compose-plugins');
const stylus = require('@zeit/next-stylus');
const fonts = require('next-fonts');
const optimizedImages = require('next-optimized-images');

require('dotenv').config();

const withStylus = [
  stylus,
  {
    cssModules: true,
    cssLoaderOptions: {
      localIdentName: '[name]__[local]___[hash:base64:5]',
    },
  },
];

const withFonts = [fonts];

const withOptimizedImages = [optimizedImages];

const nextConfig = {
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
};

module.exports = withPlugins([withFonts, withStylus, withOptimizedImages], nextConfig);
