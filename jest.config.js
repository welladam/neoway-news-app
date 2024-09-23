module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/vue3',
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.js$': 'babel-jest',
    },
    testEnvironment: 'jest-environment-jsdom',
}
