const gulp = require('gulp')
const del = require('del')
const ts = require('gulp-typescript')
const sequence = require('gulp-sequence')
const spawn = require('child_process').spawn
const tsProject = ts.createProject('./tsconfig.json')

gulp.task('clean:dist', done => {
  del([
    './dist'
  ])
  done()
})

gulp.task('clean:lib', done => {
  del([
    './lib'
  ])
  done()
})

gulp.task('compile', done => {
  gulp.src('./server/**/*.ts')
    .pipe(tsProject())
    .js.pipe(gulp.dest('lib'))
  done()
})

gulp.task('run:node', () => {
  spawn('node', ['./lib/index.js'], {stdio: 'inherit'})
})

gulp.task('build', sequence(['clean:lib', 'compile']))
