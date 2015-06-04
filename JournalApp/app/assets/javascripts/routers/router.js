JournalApp.Routers.PostsRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl.find('#content');
    this.collection = new JournalApp.Collections.Posts();

    var view = new JournalApp.Views.PostsIndex({
      collection: this.collection
    });
    options.$rootEl.find('#sidebar').html(view.render().$el);

  },

  routes: {
    // '': 'root',
    'posts/new': 'new',
    'posts/:id/edit': 'edit',
    'posts/:id': 'show'
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },

  show: function (id) {
    var post = this.collection.getOrFetch(id);
    var postShow = new JournalApp.Views.PostShow({
      model: post
    });
    this._swapView(postShow);
  },

  new: function () {
    var post = new JournalApp.Models.Post();
    var postForm = new JournalApp.Views.PostForm({
      collection: this.collection,
      model: post
    });
    this._swapView(postForm);
  },

  edit: function (id) {
    var post = this.collection.getOrFetch(id);
    var postForm = new JournalApp.Views.PostForm({
      collection: this.collection,
      model: post
    });
    this._swapView(postForm);
  }
});
