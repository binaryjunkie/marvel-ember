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
  app.import('vendor/fonts/BebasNeue_Bold.otf')
  app.import('vendor/fonts/BebasNeue_Book.otf')
  app.import('vendor/fonts/BebasNeue_Light.otf')
  app.import('vendor/fonts/BebasNeue_Regular.otf')
  app.import('vendor/fonts/BebasNeue_Thin.otf')
  app.import('vendor/fonts/Oswald_Bold.ttf')
  app.import('vendor/fonts/Oswald_SemiBold.ttf')
  app.import('vendor/fonts/Oswald_Regular.ttf')
  app.import('vendor/fonts/Oswald_Medium.ttf')
  app.import('vendor/fonts/Oswald_Light.ttf')
  // app.import('vendor/fonts/Oswald-ExtraLight.ttf')
  app.import('vendor/images/marvel_logo.svg')
  return app.toTree();
};
