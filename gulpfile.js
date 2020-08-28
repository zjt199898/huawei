const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass");

gulp.task("html", done => {
    gulp.src("*.html")
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());
    done();
});

gulp.task("js", done => {
    gulp.src("*js")
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());
    done();
})

gulp.task("sass", done => {
    gulp.src("sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());
    done();
});
//创建服务气
gulp.task("server", done => {
    connect.server({
        root: "dist",
        livereload: true
    })
    done();
});
//监听
gulp.task("watch", done => {
    gulp.watch("*.html", gulp.series("html"));
    gulp.watch("sass/*.scss", gulp.series("sass"));
    done()
});

gulp.task("build", gulp.parallel("html", "sass", "js"));
gulp.task("default", gulp.series("build", "watch", "server"));