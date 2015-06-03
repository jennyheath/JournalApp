JournalApp.Views.PostsIndex = Backbone.View.extend({

  tagName: 'ul',

  initialize: function (options) {
    // this.$el = $('#main').find('ul');
    this.collection = options.collection;
    this.$rootEl = options.$rootEl;

    this.collection.fetch({ reset: true });

    this.listenTo(this.collection, "remove reset", this.render);
  },

  template: JST['posts/index'],

  render: function () {
    this.$el.empty();
    this.collection.forEach(function (post) {
      var view = new JournalApp.Views.PostsIndexItem({ model: post });
      this.$el.append(view.render().$el);
    }.bind(this));
    this.$rootEl.html(this.$el);
    return this;
  }

});
