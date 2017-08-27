/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // Seriously? No glob support? WTF is this shenanniganary? I've gotta be missing something
  // NOTE: n00b learned the hard way that not including 'vendor' dir in the path will keep
  // the server trying to launch forever without warning - May happen with all bad paths..? 
  app.import('vendor/fonts/BebasNeue Bold.otf')
  app.import('vendor/fonts/BebasNeue Book.otf')
  app.import('vendor/fonts/BebasNeue Light.otf')
  app.import('vendor/fonts/BebasNeue Regular.otf')
  app.import('vendor/fonts/BebasNeue Thin.otf')
  app.import('vendor/fonts/Oswald-Bold.ttf')
  app.import('vendor/fonts/Oswald-SemiBold.ttf')
  app.import('vendor/fonts/Oswald-Regular.ttf')
  app.import('vendor/fonts/Oswald-Medium.ttf')
  app.import('vendor/fonts/Oswald-Light.ttf')
  // app.import('vendor/fonts/Oswald-ExtraLight.ttf')
  return app.toTree();
};
