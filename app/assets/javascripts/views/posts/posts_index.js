JournalApp.Views.PostsIndex = Backbone.View.extend({

  tagName: 'ul',

  initialize: function (options) {
    this.collection = options.collection;

    this.collection.fetch({ reset: true });

    this.listenTo(this.collection, "remove reset sync", this.render);
  },

  template: JST['posts/index'],

  render: function () {
    this.$el.empty();
    this.collection.forEach(function (post) {
      var view = new JournalApp.Views.PostsIndexItem({ model: post });
      this.$el.append(view.render().$el);
    }.bind(this));
    return this;
  }

});
