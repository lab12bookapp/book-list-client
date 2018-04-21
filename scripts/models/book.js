'use strict';

var app = app || {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'https://lm-hm-booklist.herokuapp.com';
ENV.developmentApiUrl = 'http://localhost:3000';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;
console.log(`${ENV.apiUrl}/api/v1/books`);

(function(module) {
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function Book(rawBookObj) {
    Object.keys(rawBookObj).forEach(key => this[key] = rawBookObj[key]);
  }

  Book.prototype.toHtml = function() {
    let template = Handlebars.compile($('#book-list-template').text());
    return template(this);
  };

  Book.all = [];
  Book.loadAll = rows => Book.all = rows.sort((a, b) => b.title - a.title).map(book => new Book(book));

  Book.loadOne = book => new Book(book);

  Book.fetchAll = callback => {

    $.get(`${ENV.apiUrl}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);
  };

  Book.fetchOne = callback => {
    $.get(`${ENV.apiUrl}/api/v1/books/`)
    //need id appended to the string above
      .then(Book.loadOne)

      //what should you display
      .then(callback)
      .catch(errorCallback);
  };

  module.Book = Book;
})(app);
