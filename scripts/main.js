requirejs.config({
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'bootstrap': {
      deps: ['jquery'],
      exports: 'bootstrap'
    }
  },
  /**
   * Require.js allows us to configure shortcut alias. We have defined our aliases here
   */
  paths: {
    'jquery'           : 'lib/jquery',
    'underscore'       : 'lib/underscore',
    'backbone'         : 'lib/backbone',
    'bootstrap'        : 'lib/bootstrap',
    'text'             : 'lib/text',
    'App'              : 'app',
    'Router'           : 'router'
    'dashboardView'    : 'views/dashboard.html'
  }
});

require(['App'], function(App, Client) {
  App.initialize();
});

//alert("test");