import webpack from 'webpack'

export default {
  entry: './src',
  module: {
    loaders: [{
      include: /src/,
      loader: 'babel',
      test: /\.js$/,
    },{
      include: /src/,
      loaders: ['style', 'css?modules', 'cssnext'],
      test: /\.css$/,
    },{
      include: /node_modules/,
      loaders: ['style', 'css'],
      test: /\.css$/,
    }],
  },
  output: {
    filename: './dist/client.min.js',
    library: 'Cignium',
    libraryTarget: 'var',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false,
      },
    }),
  ],
}
