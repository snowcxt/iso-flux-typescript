var webpack = require('webpack');

module.exports = function (grunt) {
    grunt.initConfig({
        clean: ['./build'],
        concurrent: {
            dev: ['webpack:dev', 'nodemon:dev'],
            options: {
                logConcurrentOutput: true
            }
        },
        copy: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'components',
                    src: ['*.js'],
                    dest: 'build/js'
                }]
            }
        },
        nodemon: {
            dev: {
                script: './app.js',
                options: {
                    ignore: ['build/**'],
                    ext: 'js,jsx'
                }
            }
        },
        webpack: {
            dev: {
                resolve: {
                    extensions: ['', '.ts', '.js', '.jsx']
                },
                entry: './client/client.js',
                output: {
                    path: './build/js',
                    filename: 'client.js'
                },
                module: {
                    loaders: [
                        { test: /\.css$/, loader: 'style!css' },
                        { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: require.resolve('babel-loader') },
                        {
                            test: /\.ts$/,
                            loader: 'awesome-typescript-loader' }
                    ]
                },
                plugins: [
                    // Protects against multiple React installs when npm linking
                    new webpack.NormalModuleReplacementPlugin(/^react?$/, require.resolve('react')),
                    new webpack.NormalModuleReplacementPlugin(/^react(\/addons)?$/, require.resolve('react/addons'))
                ],
                stats: {
                    colors: true
                },
                devtool: 'source-map',
                watch: true,
                keepalive: true
            }
        }
    });


    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('default', ['clean', 'concurrent:dev']);
};
