'use strict';

var app = app || {};

(function(module) {
  const formView = {};

  formView.initIndexPage = function() {
    $('.container').hide();
    $('.form-view').show();
    // $('.form-view').off().on('submit', 'form', (event) => {
    //   event.preventDefault();
    //   const title = $('.form-view').val();
    //   app.Book.create({title}).then(page('/'));
    //   $('#title').val('');
    // });
  };

  module.formView = formView;
})(app);