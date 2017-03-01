module.exports = {
  entry: './src/app.jsx',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  watch: true,
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['es2015', 'react']}
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  }
};
