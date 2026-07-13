import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,

  theme: {
    defaultTheme: 'prismakoreTheme',
    themes: {
      prismakoreTheme: {
        dark: false,
        colors: {
          primary: '#6d35ff',
          secondary: '#2fb4ff',
          accent: '#22c55e',
          background: '#ffffff',
          surface: '#ffffff',
          error: '#ef4444',
          info: '#2fb4ff',
          success: '#22c55e',
          warning: '#f59e0b',
        },
      },
    },
  },
})