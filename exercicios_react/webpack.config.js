const webpack = require('webpack');

module.exports = {
	entry: './ex/index.jsx', // ARQUIVO DE ENTRADA JSX
	output: { // ARQUIVO JS DE SAIDA 
		path: __dirname + '/public',
		filename: './bundle.js'
	},
	devServer: { // SERVIDOR - SIMILAR AO GULP
		port: 8080,
		contentBase: './public' // PASTA BASE DA APLICACAO
	},
	resolve: {
		extensions: ['','.js','.jsx'] // PARA IMPORTAR O COMPONENTE NA INDEX SEM UTILIZAR A EXTENSAO
	},
	module: {
		loaders: [{
			test: /.jsx?$/, // LER A EXTENSAO E FAZER O TRANSPILE COM O BABEL 
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015','react']
			}
		}]
	}
}