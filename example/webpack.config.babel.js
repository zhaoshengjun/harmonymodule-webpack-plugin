import {resolve} from 'path';
import {HarmonyModuleWebpackPlugin} from 'harmonymodule-webpack-plugin';

export default {
  entry: './src/index.js',
	output: {
		path: 'dist',
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: resolve('src'),
				loader: 'babel-loader',
			},
		],
	},
  plugins:[
    new HarmonyModuleWebpackPlugin()
  ]
}
