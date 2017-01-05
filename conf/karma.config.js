var webpackConfig = require('./webpack.config.dev');

module.exports = function (config) {
	config.set({
		basePath: '../src',
		frameworks: ['mocha', 'chai', 'sinon'],
		files: [
			'../public/js/phaser.min.js',
			{ pattern: 'js/**/*.spec.js', watched: false }
		],
		exclude: [
		],
		preprocessors: {
			'js/**/*.spec.js': ['webpack', 'sourcemap', 'coverage']
		},
		webpack: {
			module: webpackConfig.module,
			resolve: webpackConfig.resolve,
			devtool: 'inline-source-map'
		},
		htmlReporter: {
		outputFile: '../logs/test/result.html',
			// Optional 
			pageTitle: 'Game',
			subPageTitle: 'unit test results',
			groupSuites: true,
			useCompactStyle: false,
			useLegacyStyle: false
		},
		mochaReporter: {
			showDiff: true
		},
		reporters: ['progress', 'html'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_ERROR,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false,
		concurrency: Infinity,
		plugins: [
			require('karma-chrome-launcher'),
			require('karma-htmlfile-reporter'),
			require('karma-webpack'),
			require('karma-mocha'),
			require('karma-chai'),
			//require('karma-chai-spies'),
			require('karma-sinon'),
			require('karma-sourcemap-loader'),
			require('karma-coverage')
        ]
	})
}

