'use strict';

var app = app || {};

(function (module) {
  const bookView = {};

  bookView.initIndexPage = function () {
    $('.container').hide();
    $('.book-view').show();
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));
  };
  bookView.oneBook = (bookdata) => {
    console.log('bookdata', bookdata);
    $('.container').hide();
    $('.detail-view').empty().show();
    let template = Handlebars.compile($('#show-one-template').text());
    // module.Book.map(book => $('.detail-view').append(template).toHtml());
    $('.detail-view').append(template(bookdata));
  };
  module.bookView = bookView;
})(app);

$(function () {
  app.Book.fetchAll(app.bookView.initIndexPage);
});