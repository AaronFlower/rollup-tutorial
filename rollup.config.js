// Rollup plugins
import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'

export default {
  input: './src/scripts/main.js',

  output: {
    file: './build/js/main.min.js',
    format: 'iife',
    sourcemap: 'inline'
  },

  plugins: [
    eslint({
        exclude: 'styles/**'
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}