// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'error',
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-vars': 'error',
    }
  }
)
