const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const config = withModuleFederationPlugin({

  name: 'mf-child',

  exposes: {
    './Component': './src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

module.exports = {...config, ...{experiments:{outputModule:true}}}
