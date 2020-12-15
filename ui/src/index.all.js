import installQuasar from './install-quasar.js'
import { version } from '../package.json'
import lang from './lang.js'
import iconSet from './icon-set.js'

import * as components from './components.js'
import * as directives from './directives.js'

export * from './components.js'
export * from './directives.js'
export * from './plugins.js'
export * from './composables.js'
export * from './utils.js'

export const Quasar = {
  version,
  install (app, opts, ssrContext) {
    installQuasar.call(
      this,
      app,
      { ...opts, components, directives },
      ssrContext
    )
  },
  lang,
  iconSet
}