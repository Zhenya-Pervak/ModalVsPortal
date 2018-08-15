const path = require('path');

let conf = {
    entry: './src/App.jsx',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        overlay: true,
        inline: true,
        contentBase: './dist',
        port: 3030
    },

    module: {
        rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },

        {
            // test: /\s(a|c)css?$/,
            test: /\.css?$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }

        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    }

};

  module.exports = (env, options) => {
    let production = options.mode === 'production';
    // conf.devtool = production ? 'source-map' : 'eval-source-map';
    conf.devtool = production ? false : 'eval-source-map';
    return conf;
  }