const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "64p8r9",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
