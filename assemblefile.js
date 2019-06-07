'use strict';

var assemble = require('assemble');
var extname = require("gulp-extname");
var permalink = require('assemble-permalinks');
var path = require('path');

var app = assemble();

app.layouts('templates/layouts/**/*.hbs');
app.partials('templates/partials/**/*.hbs');

app.option('layout', 'main');

app.create('articles');

app.articles.option('layout', 'markdown');
app.use(permalink());

app.preRender( /./, function ( view, next ) {
  view.data.articles = app.views.articles;

  next();
} );

app.task( 'content:articles', function () {
  app.helper( 'markdown', require( 'helper-markdown' ) );
  app.articles('articles/**/*.{md,hbs}');

  return app.toStream( 'articles' )
    .pipe( app.permalink('articles/:name/index.html') )
    .pipe( app.renderFile() )
    .pipe( extname() )
    .pipe( app.dest(function(file) {
      file.path = file.data.permalink;
      file.base = path.dirname(file.path);
      return 'build/' + file.base;
    }) );
} );

app.task('default', function() {
  app.pages('pages/**/*.hbs');
  return app.toStream('pages')
    .pipe(app.renderFile())
    .pipe(extname())
    .pipe(app.dest('build'));
});

module.exports = app;
