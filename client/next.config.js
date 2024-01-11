const withTM = require("next-transpile-modules")(["gsap"]);

module.exports = withTM({
  images: {
    protocol: "https",
    domains: ["**"],
    pathname: "**",
  },
});
