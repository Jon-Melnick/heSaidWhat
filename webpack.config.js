// module.exports = {
//   entry: "./app-client.js",
//   output: {
//     filename: "public/bundle.js"
//   },
//   module: {
//     loaders: [
//       {
//         exclude: /(node_modules|app-server.js)/,
//         loader: 'babel'
//       }
//     ]
//   }
// };

module.exports = {
  entry: "./app-client.js",
  output: {
    filename: "public/bundle.js",
    // devtoolModuleFilenameTemplate: '[resourcePath]',
    // devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|app-server.js)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          // plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  },
};
