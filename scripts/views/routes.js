'use strict';

page('/*', (ctx, next) => {
  $('.page').hide();
  next();
});

page('/', app.bookView.initIndexPage);
page('/new', app.formView.initIndexPage);

page('/details/:id', (ctx) => app.Books.fetchOne(ctx.params.id).then(bookdata) => {
  app.bookView.oneBook(bookdata)
});
});


page.start();
