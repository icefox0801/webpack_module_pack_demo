module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'bundle.js',
		path: './dist',
		library: 'pack',
		libraryTarget: 'umd'
	}
};