"use strict";

const gulp = require("gulp");
const server = require("browser-sync").create();
const del = require("del");

gulp.task("refresh", function(done) {
  server.reload();
  done();
});

gulp.task("server", function() {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("assets/css/**/*.css", gulp.series("copy:css", "refresh"));
  gulp.watch("*.html", gulp.series("copy:html", "refresh"));
});

gulp.task("copy:html", function() {
  return gulp.src("*.html").pipe(gulp.dest("build"));
});

gulp.task("copy:css", function() {
  return gulp
    .src(["assets/css/**"], {
      base: "assets"
    })
    .pipe(gulp.dest("build/assets"));
});

gulp.task("copy:assets", function() {
  return gulp
    .src(["assets/fonts/**/*.{ttf,woff,woff2}", "assets/img/**"], {
      base: "assets"
    })
    .pipe(gulp.dest("build/assets"));
});

gulp.task("clean", function() {
  return del("build");
});

gulp.task("build", gulp.series("clean", "copy:assets", "copy:css", "copy:html"));
gulp.task("start", gulp.series("build", "server"));
