'use strict';

var assemble = require('assemble');
var extname = require("gulp-extname");
var permalink = require('assemble-permalinks');
var viewEvents = require('./plugins/view-events');
var merge = require('mixin-deep');
var path = require('path');

var app = assemble();
app.use(viewEvents('permalink'));
app.use(permalink());

app.onPermalink( /./, function(file, next) {
  console.log("XYZHAH PERMANENT LINK ACTIVATED");

  file.data = merge({}, app.cache.data, file.data);
  next();
});

app.layouts('templates/layouts/**/*.hbs');
app.partials('templates/partials/**/*.hbs');

app.option('layout', 'main');

app.create('articles');

app.articles.option('layout', 'markdown');
app.articles.use(permalink('articles/:name/index.html'));

app.preRender( /./, function ( view, next ) {
  view.data.articles = app.views.articles;

  next();
} );

app.task( 'content:articles', function () {
  app.helper( 'markdown', require( 'helper-markdown' ) );
  app.articles('articles/**/*.{md,hbs}');

  return app.toStream( 'articles' )
    .pipe( app.renderFile() )
    .pipe( extname() )
    .pipe( app.dest(function(file) {

      console.log(file.data);

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
