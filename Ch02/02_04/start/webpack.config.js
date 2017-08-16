module.exports = {
	entry: './script.js',
	output: {filename: 'bundle.js'},
	module: {
		loader: [
			{test: /\.js?/, loader: 'babel-loader' exclude: /node_modules/}
		]
	}
};