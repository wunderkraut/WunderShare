Template[getTemplate('postsLoadMore')].events({
  'click .more-button': function (event, instance) {
    event.preventDefault();
    if (this.controllerInstance) {
      // controller is a template
      this.loadMoreHandler(this.controllerInstance);
    } else {
      // controller is router
      this.loadMoreHandler();
    }
  }
})