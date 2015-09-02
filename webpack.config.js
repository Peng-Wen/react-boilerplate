module.exports = {
  entry: {
    app: ["webpack/hot/dev-server", "./src/js/main.js"]
  },
  output: {
    path: "./build",
    publicPath: "/assets/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, include: /src\/js/, loader: 'babel' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  }
};
