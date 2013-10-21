define('App', [
  'jquery',
  'underscore',
  'backbone',
  'Router',
  'bootstrap',
  'Marionette'
], function($, _, Backbone, Router, bootstrap, Marionette) {

  function initialize() {
    var app = new Router();

    Backbone.history.start();
  }

  // TODO: error handling with window.onerror
  // http://www.slideshare.net/nzakas/enterprise-javascript-error-handling-presentation

  return {
    initialize: initialize
  };
});
