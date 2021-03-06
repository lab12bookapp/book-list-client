'use strict';

page('/*', (ctx, next) => {
  $('.page').hide();
  next();
});

page('/', app.bookView.initIndexPage);
page('/new', app.formView.initIndexPage);
page('/book-detail', (ctx) => {
  app.Book.fetchOne(ctx.params.id)
    .then(app.showOne.initIndexPage)
});

page('/details/:id', (ctx) => {
  console.log(ctx.params.id);
  app.Book.fetchOne(ctx.params.id)
    .then((bookdata) => {
      app.bookView.oneBook(bookdata[0]);
      // better on server side
    });

});
page.start();

