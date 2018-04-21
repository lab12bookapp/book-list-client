'use strict';

var app = app || {};

(function(module) {
  const formView = {};

  formView.initIndexPage = function() {
    $('.container').hide();
    $('.form-view').show();
    $('#add-form').on('submit', function (event) {
      event.preventDefault();
      let book = {
        title: event.target.title.value,
        author: event.target.author.value,
        isbn: event.target.isbn.value,
        image_url: event.target.image_url.value,
        description: event.target.description.value
      }
      module.Book.create(book);
    })
  }
  module.formView = formView;
})(app);