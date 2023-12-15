module.exports = {
  extends: [
    require.resolve('eslint-config-ali/typescript/react'),
    require.resolve('eslint-config-ali/jsx-a11y'),
    require.resolve('./base'),
    require.resolve('./typescript-base'),
    require.resolve('./react-base'),
  ],
  settings: {
    // Apply special parsing for TypeScript files
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    // Append 'tsx' extensions to 'import/resolver' setting
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.ts', '.json', '.jsx', '.tsx'],
      },
    },
    // Append 'tsx' extensions to 'import/extensions' setting
    'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
  },
};
