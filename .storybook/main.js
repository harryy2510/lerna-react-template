const babelConfig = require('../babel.config')
module.exports = {
    stories: ['../packages/**/stories/*.stories.(ts|tsx|js|jsx)'],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(js|jsx|ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: babelConfig
        })
        config.resolve.extensions.push('.ts', '.tsx')
        return config
    }
}
