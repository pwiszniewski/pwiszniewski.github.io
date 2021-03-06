const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/script.js',
	output: {
		filename: 'script.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
				{
	                test: /\.js$/,
	                exclude: /node_modules/,
	                use: {
	                    loader: 'babel-loader',
	                    options: {
	                        presets: ['@babel/preset-env']
	                    }
	                }
	            },
	            {
                test: /\.s[ac]ss$/,
                use: [

                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ],
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              }
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		})
	]
}