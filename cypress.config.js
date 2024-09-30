const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    //experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    "requestTimeout": 2000,
    "defaultCommandTimeout": 10000,
    //"retries": 2,
    "pageLoadTimeout": 60000
  },
});
