// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const path = require('path')

const config = {
	context: path.resolve(__dirname, 'src'),
	entry: './app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader',
			]
		}, {
			test: /bootstrap\/dist\/js\/umd\//,
			use: 'imports-loader?jQuery=jquery'
		}, {
			test: /\.js$/,
			include: path.resolve(__dirname, 'src'),
			use: [{
				loader: 'babel-loader',
				options: {
					presets: [
						['es2015', { modules: false }]
					]
				}
			}]
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({template: './index.html'})
	]
}

module.exports = config;
