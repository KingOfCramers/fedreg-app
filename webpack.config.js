const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

process.env.NODE_ENV = process.env.NODE_ENV || "development";
  if (process.env.NODE_ENV === "test") {
    require("dotenv").config({ path: ".env.test" }); // use dotenv module to assign .env to environment variables.
  } else if (process.env.NODE_ENV === "development") {
    require("dotenv").config({ path: ".env.development" });
  }

module.exports = (env) => {
  const cssExtract = new ExtractTextPlugin("styles.css"); // will make separate css file inside public build.
  const isProduction = env === "production";

  return {
    entry: ['babel-polyfill', './src/app.js'], // 'babel-polyfill (for old browsers) will get setup first, then will get ./src/app.js as main app.
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: cssExtract.extract({ // Extract it, before processing...This allows us to put it into a separate .css file
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true // Development friendly build....
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      cssExtract,
      new webpack.DefinePlugin({ // Must manually pass down node environment variables to our React App. To do this we use the builtin webpack plugin.
        'process.env.FIREBASE_API_KEY' : JSON.stringify(process.env.FIREBASE_API_KEY), // JSON.stringify adds quotes
        'process.env.FIREBASE_AUTH_DOMAIN' : JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL' : JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID' : JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET' : JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID' : JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map', // Only use longer, more complex sourcemap in development mode.
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true, // Sends index for webpack server
      publicPath: "/dist/"
    }
  };
};