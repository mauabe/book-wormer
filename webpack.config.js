var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'src')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, 
        exclude: /node_modules/,
        use: ["babel-loader"]
      }, 
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }, 
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader?limit=100000"
      }
    ]
  }
};