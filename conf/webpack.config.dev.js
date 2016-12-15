var path = require('path');
var webpack = require('webpack');

console.log(path.resolve(__dirname, 'src'));

module.exports = {
	entry: [
		'babel-polyfill',
		'./src/js'
	],
	output: {
		path: 'public/',
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
		new webpack.HotModuleReplacementPlugin()
	],
	debug: true,
	devtool: 'source-map',
	devServer: {
		contentBase: 'public/',
		inline: true
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		root: [
			path.resolve('./src')
		]
	}
};