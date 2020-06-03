const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js',
	},
	devServer: {
		contentBase: './src',
		open: true,
		hot: true,
		port: 3000,
		compress: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './public/index.html',
		}),
	],
}
