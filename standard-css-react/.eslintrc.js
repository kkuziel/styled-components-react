module.exports = {
  "parser": "babel-eslint",
  "extends": ["airbnb", "plugin:react/recommended", "plugin:jest/recommended"],
  "plugins": ["react", "jest"],
  "rules": {
    "react/jsx-filename-extension": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
  },
  "env": {
    "jest/globals": true
  },
};
