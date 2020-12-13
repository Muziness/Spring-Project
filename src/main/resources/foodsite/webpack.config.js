const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const rules = [
    {
        test: /\.tsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }, 
    {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
    },
    {
         test: /\.(png|svg|jpeg|jpg|gif)$/,
         use: [
           'file-loader?name=[name].[ext]&outputPath=images/'
         ]
   }
]
module.exports = {
    target: 'web',
    mode: 'development',
    entry: './src/Presentational Components/App.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {rules},
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'foodsite',
        hash: true,
        template: './index.html'
    })]
}
