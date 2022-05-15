/// <reference types="cypress" />
const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor'); 
module.exports = (on, config) => {
    const options = {
      ...browserify.defaultOptions,
      typescript: require.resolve("typescript"),
  };

  require('cypress-mochawesome-reporter/plugin')(on);

  on('file:preprocessor', cucumber(options))
  return config
}