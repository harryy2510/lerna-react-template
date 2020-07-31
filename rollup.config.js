import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import multiInput from 'rollup-plugin-multi-input'
import tsc from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
    input: ['src/**/*.(js|jsx|ts|tsx)'],
    output: {
        dir: 'lib'
    },
    plugins: [
        multiInput(),
        external(),
        postcss({
            modules: true
        }),
        url(),
        tsc(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'runtime',
            extensions
        }),
        resolve({ extensions }),
        commonjs(),
        terser()
    ]
}
