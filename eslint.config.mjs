// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      // Style de code
      'no-console': 'warn',
      'no-unused-vars': 'error',
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],

      // Vue spécifique
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-vars': 'error',
    }
  }
)
