var gulp = require('gulp');
var markdown = require('gulp-markdown');
var wrapper = require('gulp-wrapper');

gulp.task('html', function () {
    return gulp.src('*/README.md')
        .pipe(markdown())
        .pipe(wrapper({
           header: '<!doctype html>\n<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><script src="https://scratchblocks.github.io/js/scratchblocks-v3.1-min.js"></script><script src="https://scratchblocks.github.io/js/translations-all-v3.1-min.js"></script></head><body>\n',
           footer: '<script type="text/javascript">scratchblocks.renderMatching(\'.code\', { inline:true, render: (doc, cb) => { doc.translate(scratchblocks.allLanguages[\'sv\']); doc.render(cb) } });</script></body></html>\n'
        }))
        .pipe(gulp.dest(''));
});

gulp.task('default', ['html']);
