/**
 * @type {import('prettier').Config}
 * @see https://prettier.io/docs/en/configuration.html
 */
const config = {
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    tabWidth: 2,
    useTabs: false,
    plugins: [
      '@ianvs/prettier-plugin-sort-imports',
      'prettier-plugin-jsdoc',
      'prettier-plugin-tailwindcss',
    ],
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderTypeScriptVersion: '5.0.0',
    importOrder: [
      '<BUILTIN_MODULES>',
      '',
      '^react$',
      '^react-dom$',
      '^next(?:\\/[a-zA-Z0-9_\\-]+)*$',
      '<THIRD_PARTY_MODULES>',
      '',
      '^@/(.*)$',
      '',
      '^(?!.*[.]css$)[./].*$',
      '',
      '.css$',
    ],
  };
  
  export default config;
  