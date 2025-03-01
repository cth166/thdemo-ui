import fs from 'node:fs';
import path from 'node:path'
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig, build } from 'vite';

const entryDir = path.resolve(__dirname, 'devui-vue/devui')
const outputDir = path.resolve(__dirname, 'devui-vue/build')

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()],
})

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
}

// 全量构建
async function buildAll() {
  await build(defineConfig({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, 'vue-devui.ts'),
        name: 'vue-devui',
        fileName: 'vue-devui',
        formats: ['es', 'umd'],
      },
      outDir: outputDir,
    },
  }))
}

async function buildLib() {
  await buildAll()
}

buildLib()
