JournalApp.Routers.PostsRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'index',
    'posts/:id': 'show'
  },

  index: function () {
    var collection = new JournalApp.Collections.Posts();
    var view = new JournalApp.Views.PostsIndex({
      $rootEl: this.$rootEl,
      collection: collection
    });
  },

  show: function () {
    
  }
});
