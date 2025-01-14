import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'

export default [
  {
    input: './src/background.js',
    output: { file: './dist/background.js', format: 'es' },
    watch: { include: 'src/**' },
    plugins: [babel({ babelHelpers: 'bundled' }), terser()]
  },
  {
    input: './src/content-script.js',
    output: { file: './dist/content-script.js', format: 'es' },
    watch: { include: 'src/**' },
    plugins: [babel({ babelHelpers: 'bundled' }), terser()]
  }
]
