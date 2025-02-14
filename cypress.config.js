const { defineConfig } = require('cypress');
const downloadFile = require('cypress-downloadfile/lib/task'); // Import the task

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task',{
      // Register the downloadFile task
     downloadFile:downloadFile,
     
    });

      // Uncomment if using image snapshot plugin
      // const { addMatchImageSnapshotPlugin } = require('cypress-plugin-image-snapshot/plugin');
      // addMatchImageSnapshotPlugin(on, config);

      // Return the config object as it might have been modified by other plugins
     // return config;
    },
  },

});
