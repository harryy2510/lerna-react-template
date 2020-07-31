const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const babelConfig = require('../babel.config')
const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    stories: ['../packages/**/stories/*.stories.(ts|tsx|js|jsx)'],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
                ...babelConfig,
                plugins: [...babelConfig.plugins, isDevelopment && 'react-refresh/babel'].filter(Boolean)
            }
        })
        config.resolve.extensions.push('.ts', '.tsx')
        if (isDevelopment) {
            config.plugins.push(new ReactRefreshWebpackPlugin())
            config.plugins.push(new SimpleProgressWebpackPlugin({ format: 'minimal' }))
        }
        return config
    }
}

// `standard-version --no-verify && gulp build && npm publish ${tsconfig.compilerOptions.outDir} && (git push --follow-tags origin master || true)`
