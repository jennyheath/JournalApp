JournalApp.Views.PostsIndexItem = Backbone.View.extend({
  tagName: 'li',

  template: JST['posts/posts_index_item'],

  events: {
    'click button': 'deleteItem'
  },

  initialize: function (options) {
    this.model = options.model;
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  deleteItem: function () {
    this.model.destroy();
    this.remove();
  }
});
