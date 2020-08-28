const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("html", done => {
    gulp.src("*.html")
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());
    done();
});

gulp.task("Img", done => {
    gulp.src("*.img")
        .pipe(gulp.dest("dist/img"))
        .pipe(connect.reload());
    done();
})

gulp.task("js", done => {
    gulp.src("*js")
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());
    done();
})

gulp.task("sass", done => {
    gulp.src("sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
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

gulp.task("build", gulp.parallel("html", "sass", "js", "Img"));
gulp.task("default", gulp.series("build", "watch", "server"));