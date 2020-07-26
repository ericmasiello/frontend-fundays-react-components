module.exports = {
  webpackFinal: async (config) => {
    // find all rules that include a the string "module" in the regex test
    // this is used as a proxy to know if its a css loader
    const cssModuleRules = config.module.rules.filter((rule) => {
      return rule.test.toString().includes('module');
    });

    // iterate over each option and make sure it has a "modules" option. If so,
    // we can safely assume its a css module rule
    cssModuleRules.forEach((rule) => {
      rule.use.forEach((use) => {
        if (use && use.options && typeof use.options.modules === 'object') {
          // add the auto camel case support
          // https://github.com/webpack-contrib/css-loader/tree/v3.4.2#localsconvention
          use.options.localsConvention = 'camelCase';
        }
      });
    });

    return config;
  },
};
