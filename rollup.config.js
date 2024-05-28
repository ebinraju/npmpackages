import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import external from 'rollup-plugin-peer-deps-external';
import path from 'path';
import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'src/index.jsx',
  output: [
    { file: pkg.main, format: 'cjs' },
    {
      file: pkg.module,
      format: "esm",
      exports: "named",
      sourcemap: true,
      inlineDynamicImports: true
    }
  ],
  plugins: [
    external(),
    postcss({
      extract: path.resolve('dist/styles.css'),
      modules: {
        rules: [
          { test: /\/components\/.*\.(css | scss)$/ }
        ],
        globalModulePaths: ['/node_modules/.*/*.\.(css | scss)']
      },
      use: ['sass']
    }),
    resolve(),
    commonjs(),
    terser(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react']
    })
  ],
  external: Object.keys(pkg.peerDependencies)
};
