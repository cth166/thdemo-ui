import type { TaskFunction } from 'gulp'
import type { OutputOptions, Plugin } from 'rollup'
import path from 'node:path'
import { epRoot, excludeFiles, pkgRoot } from '@element-plus/build-utils'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import glob from 'fast-glob'
import { series } from 'gulp'
import { rollup } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'
import { buildConfigEntries, target } from '../build-info'
import { IvmpUIAlias } from '../plugins/ivmp-ui-alias'
import { generateExternal, withTaskName, writeBundles } from '../utils'

const plugins = [
  // IvmpUIAlias(),
  vue(),
  vueJsx(),
  esbuild({
    sourceMap: true,
    target,
    loaders: {
      '.vue': 'ts',
    },
  }),
]

async function buildModulesComponents() {
  const input = excludeFiles(
    await glob(['**/*.{js,ts,vue}', '!**/style/(index|css).{js,ts,vue}'], {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    }),
  )
  const bundle = await rollup({
    input,
    plugins,
    external: await generateExternal({ full: false }),
    treeshake: { moduleSideEffects: false },
  })

  await writeBundles(
    bundle,
    buildConfigEntries.map(([module, config]): OutputOptions => {
      return {
        format: config.format,
        dir: config.output.path,
        exports: module === 'cjs' ? 'named' : undefined,
        preserveModules: true,
        preserveModulesRoot: epRoot,
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`,
      }
    }),
  )
}

async function buildModulesStyles() {
  const input = excludeFiles(
    await glob('**/style/(index|css).{js,ts,vue}', {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    }),
  )
  const bundle = await rollup({
    input,
    plugins,
    treeshake: false,
  })

  await writeBundles(
    bundle,
    buildConfigEntries.map(([module, config]): OutputOptions => {
      return {
        format: config.format,
        dir: path.resolve(config.output.path, 'components'),
        exports: module === 'cjs' ? 'named' : undefined,
        preserveModules: true,
        preserveModulesRoot: epRoot,
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`,
      }
    }),
  )
}

export const buildModules: TaskFunction = series(
  withTaskName('buildModulesComponents', buildModulesComponents),
  withTaskName('buildModulesStyles', buildModulesStyles),
)
