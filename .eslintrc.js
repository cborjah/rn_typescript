module.exports = {
  root: true,
  extends: ["@react-native-community", "plugin:prettier/recommended"],
  rules: {
    quotes: [2, "single", { "avoidEscape": true }],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
      }
    ]
  }
};
