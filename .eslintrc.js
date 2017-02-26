module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    "react/no-multi-comp": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/prefer-stateless-function": 1,
    "react/jsx-indent-props": 0,
    "react/jsx-boolean-value": 0,
    "import/default": 0,
    "import/no-duplicates": 0,
    "import/named": 0,
    "import/namespace": 0,
    "import/no-unresolved": 0,
    "import/no-named-as-default": 2,
    "comma-dangle": 0,
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "linebreak-style": ["error", "windows"],
    "no-console": 1,
    "no-param-reassign": 1,
    "no-alert": 1,
    "no-use-before-define": ["error", { "functions":false, "classes": false }],
    "max-len": [1,  120 ],
    "prefer-const": 1,
    "new-cap": 0,
    "object-curly-spacing": [1, "always", {
      "objectsInObjects": false,
      "arraysInObjects": false
    }],
    "arrow-body-style": [1, "as-needed"],
    "no-unused-vars": [1, { "args": "all", "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
    "quote-props": [2, "consistent-as-needed"]
  }
};