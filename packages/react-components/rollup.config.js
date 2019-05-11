import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import renameExtensions from '@betit/rollup-plugin-rename-extensions';
import path from 'path';
import pkg from './package.json';

export default [
  {
    input: 'index.ts',
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      renameExtensions({
        include: ['**/*.tsx', '**/*.ts', '**/*.scss'],
        mappings: {
          '.tsx': '.js',
          '.ts': '.js',
          '.scss': '.styles.js',
        },
      }),
      resolve(),
      commonjs(),
      typescript({
        typescript: require('typescript'),
        rollupCommonJSResolveHack: true,
      }),
      postcss({
        modules: {
          camelCase: true,
        },
      }),
    ],
    preserveModules: true,
    output: [
      { dir: path.dirname(pkg.main), format: 'cjs', sourcemap: true },
      { dir: path.dirname(pkg.module), format: 'esm', sourcemap: true },
    ],
  },
];
