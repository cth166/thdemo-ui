import { resolve } from 'node:path'

const __dirname = import.meta.dirname

export const projRoot = resolve(__dirname, '..', '..', '..')
export const pkgRoot = resolve(projRoot, 'packages')
export const compRoot = resolve(pkgRoot, 'components')
export const themeRoot = resolve(pkgRoot, 'theme-chalk')
export const hookRoot = resolve(pkgRoot, 'hooks')
export const directiveRoot = resolve(pkgRoot, 'directives')
export const iuRoot = resolve(pkgRoot, 'ivmp-ui')
export const utilRoot = resolve(pkgRoot, 'utils')
export const buildRoot = resolve(projRoot, 'internal', 'build')

// Docs
export const docsDirName = 'docs'
export const docRoot = resolve(projRoot, docsDirName)
export const vpRoot = resolve(docRoot, '.vitepress')

/** `/dist` */
export const buildOutput = resolve(projRoot, 'dist')
/** `/dist/ivmp-ui` */
export const iuOutput = resolve(buildOutput, 'ivmp-ui')

export const projPackage = resolve(projRoot, 'package.json')
export const compPackage = resolve(compRoot, 'package.json')
export const themePackage = resolve(themeRoot, 'package.json')
export const hookPackage = resolve(hookRoot, 'package.json')
export const directivePackage = resolve(directiveRoot, 'package.json')
export const iuPackage = resolve(iuRoot, 'package.json')
export const utilPackage = resolve(utilRoot, 'package.json')
export const docPackage = resolve(docRoot, 'package.json')
