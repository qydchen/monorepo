const withTM = require("next-transpile-modules")(["utils"]);

module.exports = withTM({
  reactStrictMode: true,
});
