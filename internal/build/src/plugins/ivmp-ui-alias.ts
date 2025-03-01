import type { Plugin } from 'rollup'

import { PKG_NAME, PKG_PREFIX } from '@ivmp-ui/build-constants'

export function IvmpUIAlias(): Plugin {
  const themeChalk = 'theme-chalk'
  const sourceThemeChalk = `${PKG_PREFIX}/${themeChalk}` as const
  const bundleThemeChalk = `${PKG_NAME}/${themeChalk}` as const

  return {
    name: 'element-plus-alias-plugin',
    resolveId(id) {
      if (!id.startsWith(sourceThemeChalk))
        return
      return {
        id: id.replaceAll(sourceThemeChalk, bundleThemeChalk),
        external: 'absolute',
      }
    },
  }
}
