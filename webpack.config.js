const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './app.js',
	mode: 'production',
	output: {
		path: `${__dirname}/dist`,
		filename: 'bundle.js',
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles.css'
		}),
		new MiniCssExtractPlugin({
			filename: './mf/mf-drawer/mf-drawer.css'
		}),
		new MiniCssExtractPlugin({
			filename: './mf/mf-videos/mf-videos.css'
		}),
		new HtmlWebpackPlugin({
			filename: 'videos.html',
			template: './src/videos.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'favorites.html',
			template: './src/favorites.html'
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			}
		],
	}
};