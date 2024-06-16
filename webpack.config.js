const ModuleFederationPlugin = require('@angular-architects/module-federation/webpack').ModuleFederationPlugin;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        AppComponent: 'mfe1@http://localhost:4201/remoteEntry.js', // Configuração para carregar o MFE1
      },
    }),
  ],
};
