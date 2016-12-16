var del = require('del');
var gulp = require("gulp");
var gutil = require('gulp-util');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require("./webpack.config.js");

var project = {
    build: {
        dir: 'dist',
        jsDir: 'dist/js'
    }
};

gulp.task('clean', function() {
    return del([ project.build.dir + '*']);
});

gulp.task('copy', function() {
    gulp.src(['node_modules/phaser/build/phaser.js'])
        .pipe(gulp.dest(project.build.jsDir));
    gulp.src(['src/**/*.css'])
        .pipe(gulp.dest(project.build.dir));
    return gulp.src(['src/index.html'])
        .pipe(gulp.dest(project.build.dir));
});

gulp.task('tsc', function() {
    return gulp.src('src/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest(project.build.dir));
});

gulp.task('webpack', function() {

    webpack(Object.create(webpackConfig),
        function(err,stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        // callback();
    });
});

gulp.task('webpackDevServer', function() {
  	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	// myConfig.devtool = "eval";
	// myConfig.debug = true;

    new WebpackDevServer(webpack(myConfig), {
        publicPath: '/',
        contentBase: project.build.dir + '/',
        stats: {
            colors: true
        }
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    });
});

gulp.task('default', ['copy', 'tsc', 'webpackDevServer']);

gulp.task('build', ['copy', 'tsc', 'webpack']);