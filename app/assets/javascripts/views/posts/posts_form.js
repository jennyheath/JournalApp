JournalApp.Views.PostForm = Backbone.View.extend({
  template: JST['posts/post_form'],

  events: {
    'submit form': 'handleSubmit'
  },

  intialize: function (options) {
    this.model = options.model;
    this.errors = "";
    this.collection = options.collection;
  },

  render: function () {
    var content = this.template({
      errors: this.errors,
      post: this.model
    });
    this.$el.html(content);
    return this;
  },

  handleSubmit: function (event) {
    event.preventDefault();

    var formData = $(event.currentTarget).serializeJSON();
    this.model.set(formData.post);
    this.model.save(formData.post, {
      success: function (model, response, options) {
        this.collection.add(model);
        Backbone.history.navigate('posts/' + model.id, { trigger: true });
      }.bind(this),

      error: function (model, response, options) {
        this.errors = response.responseJSON;
        this.render();
      }.bind(this)
    });
  }
});
