const path = require('path')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'dist.js'
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
		  }
	    ]
	}
}