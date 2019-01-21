module.exports = {
  "parser": "babel-eslint",
  "extends": ["airbnb", "plugin:react/recommended", "plugin:jest/recommended"],
  "plugins": ["react", "jest"],
  "rules": {
    "react/jsx-filename-extension": "off",
  },
  "env": {
    "jest/globals": true
  },
};
