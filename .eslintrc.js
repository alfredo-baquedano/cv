module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential',
        '@vue/standard'
    ],
    globals: { _: true },
    rules: {
        indent: ['error', 4],
        eslintIgnore: 'node_modules/*',
        'no-tabs': 0,
        'no-useless-escape': 0
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
