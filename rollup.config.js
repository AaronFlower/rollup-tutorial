// Rollup plugins
import babel from 'rollup-plugin-babel'

export default {
  input: './src/scripts/main.js',

  output: {
    file: './build/js/main.min.js',
    format: 'iife',
    sourcemap: 'inline'
  },

  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}