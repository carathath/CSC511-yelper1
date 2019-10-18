'use strict';

module.exports = function(environment) {
  let ENV = {

    firebase: {
      apiKey: "AIzaSyAycMl25FtJZvgqVNxYjILHVK-bIu2VUvU",
      authDomain: "yelpapp-8278e.firebaseapp.com",
      databaseURL: "https://yelpapp-8278e.firebaseio.com",
      projectId: "yelpapp-8278e",
      storageBucket: "yelpapp-8278e.appspot.com",
      messagingSenderId: "809014164389",
      appId: "1:809014164389:web:32a00dbc2b005b97a5064c"
    },
    apollo:{
      apiURL: '/api'
    },
    modulePrefix: 'yelpapp',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
