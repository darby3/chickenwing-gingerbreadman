'use strict';

var assemble = require('assemble');
var extname = require('gulp-extname');
var permalink = require('assemble-permalinks');
var helpers = require('handlebars-helpers');
var path = require('path');

var app = assemble();

app.layouts('templates/layouts/**/*.hbs');
app.partials('templates/partials/**/*.hbs');

app.option('layout', 'main');

app.create('updates');
app.updates.option('layout', 'update');

app.use(permalink());

app.preRender( /./, function ( view, next ) {
  view.data.updates = app.views.updates;

  next();
} );

app.task( 'content:updates', function () {
  app.helper( 'date', helpers.date() );

  app.helper( 'markdown', require( 'helper-markdown' ) );
  app.helper( 'log', helpers.logging() );
  app.helper( 'array', helpers.array() );
  app.updates('updates/**/*.{md,hbs}');

  return app.toStream( 'updates' )
    .pipe( app.permalink('updates/:name/index.html') )
    .pipe( app.renderFile() )
    .pipe( extname() )
    .pipe( app.dest(function(file) {
      file.path = file.data.permalink;
      file.base = path.dirname(file.path);
      return 'build/' + file.base;
    }) );
} );

app.task( 'listing:updates', ['content:updates'], function() {
  app.helper( 'date', helpers.date() );

  app.pages('listing/**/updates.hbs');
  return app.toStream('pages')
    .pipe(app.renderFile())
    .pipe(extname())
    .pipe(app.dest('build'));
});

app.task('rebuild:all', ['listing:updates'], function() {
  app.pages('pages/**/*.hbs');
  return app.toStream('pages')
    .pipe(app.renderFile())
    .pipe(extname())
    .pipe(app.dest('build'));
});

app.task('default', function() {
  app.pages('pages/**/*.hbs');
  return app.toStream('pages')
    .pipe(app.renderFile())
    .pipe(extname())
    .pipe(app.dest('build'));
});

module.exports = app;
