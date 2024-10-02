module.exports = {
  default: {
    require: ['./tests/steps/**/*.js'],
    format: ['html:reports/cucumber-report.html'],
    parallel: 2,
    formatOptions: {
      snippetInterface: 'async-await',
    },
    paths: ['./tests/features/**/*.feature'],
  },
}
