const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
        setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  experimentalStudio:true,
env:{
  URL:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
}

});
