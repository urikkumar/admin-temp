define('Router', [
  'jquery',
  'underscore',
  'backbone',
  'dashboardView',
  
], function($, _, Backbone, dashboardView) {
  var AppRouter, initialize;

  AppRouter = Backbone.Router.extend({
    routes: {
      ''            : 'showDashboard',
      'home'        : 'showDashboard',
      // any other action defaults to the following handler
      '*actions'    : 'defaultAction'
    },
  /*  initialize: function() {
      this.clientView = {};
      this.clientEditView = {};
      this.headerView = new HeaderView();
      // cached elements
      this.elms = {
        'page-content': $('.page-content')
      };
      $('header').hide().html(this.headerView.render().el).fadeIn('slow');
      $('footer').fadeIn('slow');
    },
    home: function() {
      this.headerView.select('home-menu');

      if (!this.homeView) {
        this.homeView = new HomeView();
      }
      this.elms['page-content'].html(this.homeView.render().el);
    },
    showUsers: function(){
      dashboardView.render();
    },
    showClients: function() {
      var that = this;

      this.headerView.select('list-menu');

      if (!this.clientListView) {
        this.clientListView = new ClientListView();
      }
      this.clientListView.render(function() {
        that.elms['page-content'].html(that.clientListView.el);
      });
    },*/
    showDashboard: function(){
     dashboardView.render();
    }

  /*    // pass _silent to bypass validation to be able to fetch the model
      model = new Client({ _id: id, _silent: true });
      model.fetch({
        success : function(model) {
          model.unset('_silent');

          view = new ClientView({ model: model });
          that.elms['page-content'].html(view.render().el);
          view.model.on('delete-success', function() {
            delete view;
            that.navigate('clients', { trigger: true });
          });
        },
        error   : function(model, res) {
          if (res.status === 404) {
            // TODO: handle 404 Not Found
          } else if (res.status === 500) {
            // TODO: handle 500 Internal Server Error
          }
        }
      });
    },
    addClient: function() {
      var that = this, model, view;

      this.headerView.select('new-menu');

      model = new Client();
      view  = new ClientEditView({ model: model });

      this.elms['page-content'].html(view.render().el);
      view.on('back', function() {
        delete view;
        that.navigate('#/clients', { trigger: true });
      });
      view.model.on('save-success', function(id) {
        delete view;
        that.navigate('#/clients/' + id, { trigger: true });
      });
    },
    editClient: function(id) {
      var that = this, model, view;

      this.headerView.select();

      // pass _silent to bypass validation to be able to fetch the model
      model = new Client({ _id: id, _silent: true });
      model.fetch({
        success : function(model) {
          model.unset('_silent');

          // Create & render view only after model has been fetched
          view = new ClientEditView({ model: model });
          that.elms['page-content'].html(view.render().el);
          view.on('back', function() {
            delete view;
            that.navigate('#/clients/' + id, { trigger: true });
          });
          view.model.on('save-success', function() {
            delete view;
            that.navigate('#/clients/' + id, { trigger: true });
          });
        },
        error   : function(model, res) {
          if (res.status === 404) {
            // TODO: handle 404 Not Found
          } else if (res.status === 500) {
            // TODO: handle 500 Internal Server Error
          }
        }
      });

    },*/
    defaultAction: function(actions) {
      // No matching route, log the route?
    }
  });

  return AppRouter;
});