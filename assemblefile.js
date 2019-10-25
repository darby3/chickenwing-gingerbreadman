'use strict';

var assemble = require('assemble');
var extname = require('gulp-extname');
var permalink = require('assemble-permalinks');
var helpers = require('handlebars-helpers');
var path = require('path');

var app = assemble();

app.layouts('templates/layouts/**/*.hbs');
app.partials('templates/partials/**/*.hbs');

var paths = {
  buildDir: path.join( __dirname, './build' ),
};

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
    .pipe( app.permalink('updates/index.html') )
    .pipe(app.renderFile())
    .pipe(extname())
    .pipe( app.dest(function(file) {
      file.path = file.data.permalink;
      file.base = path.dirname(file.path);
      return 'build/' + file.base;
    }) );
});

app.task( 'home', function() {
  app.pages('home/index.hbs');
  return app.toStream('pages')
    .pipe( app.permalink('index.html') )
    .pipe(app.renderFile())
    .pipe(extname())
    .pipe( app.dest(function(file) {
      file.path = file.data.permalink;
      file.base = path.dirname(file.path);
      return 'build/' + file.base;
    }) );
});

app.task('default', function() {
  app.pages('pages/**/*.hbs');
  return app.toStream('pages')
    .pipe( app.permalink( path.join( '.', ':getQualifiedName()/index.html' ), {
      getQualifiedName: function () {
        var relPath = path.relative( this.base, this.dirname );
        return path.join( relPath, this.name );
      }
    }) )
    .pipe(app.renderFile())
    .pipe(extname())
    .pipe( app.dest(function(file) {
      file.path = file.data.permalink;
      file.base = path.dirname(file.path);
      return 'build/' + file.base;
    }) );
});

module.exports = app;
