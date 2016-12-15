var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

console.log(path.resolve(__dirname, 'src'));

module.exports = {
	entry: [
		'babel-polyfill',
		'./src/js'
	],
	output: {
		path: 'build/',
		publicPath: '/',
		filename: 'js/app.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: [
					path.resolve(__dirname, '../src')
				],
				loader: 'babel-loader',
				query: {
					plugins: ['transform-runtime'],
					presets: ['latest', 'react', 'stage-2']
				}
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname, '../public/js'),
			to: path.resolve(__dirname, '../build/js')
		}, {
			from: path.resolve(__dirname, '../public/css'),
			to: path.resolve(__dirname, '../build/css')
		}, {
			from: path.resolve(__dirname, '../public/assets'),
			to: path.resolve(__dirname, '../build/assets')
		}])
	],
	debug: true,
	devtool: 'source-map',
	devServer: {
		contentBase: 'public/',
		inline: true,
		outputPath: 'build/',
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		root: [
			path.resolve('./src')
		]
	}
};