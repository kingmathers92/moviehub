module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/extensions': 0,
    'react/prop-types': 0,
    'linebreak-style': 0,
    'react/state-in-constructor': 0,
    'import/prefer-default-export': 0,
    'max-len': [2, 250],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'no-underscore-dangle': [
      'error',
      { allow: ['_d', '_dh', '_h', '_id', '_m', '_n', '_t', '_text'] },
    ],
    'object-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-array-index-key': 0,
    'no-param-reassign': 0,
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'import/no-cycle': 'off',
    'no-nested-ternary': 'off',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'operator-linebreak': [
      'error',
      'before',
    ],
    'implicit-arrow-linebreak': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-curly-newline': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    camelcase: 'off',
    'no-confusing-arrow': 'off',
    'function-paren-newline': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'consistent-return': 'off',
  },
};

