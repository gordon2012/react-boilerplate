var HtmlWebPackPlugin = require('html-webpack-plugin');
var HtmlWebPackPluginConfig = new HtmlWebPackPlugin({
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'index.jsx'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass'],
				// include: __dirname + '/src'
				exclude: /node_modules/
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [HtmlWebPackPluginConfig],
	resolve: {
		extenstions: ['', '.js', '.jsx'],
		modulesDirectories: ['src', 'node_modules']
	}
};
