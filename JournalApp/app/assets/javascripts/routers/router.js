JournalApp.Routers.PostsRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = new JournalApp.Collections.Posts();
  },

  routes: {
    '': 'index',
    'posts/:id': 'show'
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },

  index: function () {
    var view = new JournalApp.Views.PostsIndex({
      collection: this.collection
    });
    this._swapView(view);
  },

  show: function (id) {
    var post = this.collection.getOrFetch(id);
    var postShow = new JournalApp.Views.PostShow({
      model: post
    });
    this._swapView(postShow);
  }
});
