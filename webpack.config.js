const path = require('path')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'dist.js',
		publicPath: '../dist/'
	},
	module: {
	    rules: [
	      {
	        test: /\.css$/,
	        use: [ 'style-loader', 'css-loader' ]
	      },
		  {
			  test: /\.less$/,
			  use: [{
				  loader: "style-loader"
			  }, {
				  loader: "css-loader"
			  }, {
				  loader: "less-loader"
			  }]
		  },
		  {
			  test: /\.(png|jpg|gif)$/,
			  use: [
				{
				  loader: 'file-loader',
				  options: {
					  name: 'imgage/[name].[hash:8].[ext]'
				  }
				}
			  ]
			}
		  
	    ]
	}
}