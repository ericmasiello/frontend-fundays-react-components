module.exports = {
  extends: ['stylelint-config-ericmasiello', 'stylelint-config-css-modules'],
  rules: {
    'selector-class-pattern': '^([a-z][a-zA-Z0-9]*)((__|-{1,2})[a-z0-9]+)*$',
    'value-list-comma-newline-after': null,
  },
};
