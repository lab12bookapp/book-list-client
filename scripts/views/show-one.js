'use strict';

var app = app || {};

(function(module) {
  const showOne = {};

  showOne.initIndexPage = function() {
    $('.container').hide();
    $('.detail-view').show();
    // const id = $(event.target).parent().data('bookid');
    // page('/api/v1/books/' + id);
    $('#book-detail').off().on('click','button', ()=> {
      page('/book-detail')
    })
    let template = Handlebars.compile($('#book-list-template').text());
    $('.detail-view').append(template);
  };


  module.showOne = showOne;
})(app);


// $('#edit-name').val(thing.name);

// $('#edit-page').off().on('click', 'button', () => {
//   const name = $('#edit-name').val();
//   thing.name = name;
//   app.Thing.update(thing).then(() => page('/'));
// });