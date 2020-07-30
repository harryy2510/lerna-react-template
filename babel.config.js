module.exports = {
    presets: [
        ['@babel/preset-env', { modules: false }],
        ['react-app', { absoluteRuntime: false, flow: false, typescript: true }]
    ]
}
