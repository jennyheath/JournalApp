JournalApp.Collections.Posts = Backbone.Collection.extend({

  model: JournalApp.Models.Post,
  url: "posts/",

  getOrFetch: function (id) {
    var collection = this;

    var widget = collection.get(id);

    if (widget) {
      widget.fetch();
    } else {
      widget = new JournalApp.Models.Post({ id: id });
      widget.fetch({
        success: function () {
          collection.add(widget);
        }
      });
    }
    return widget;
  }
});
