const withTM = require("next-transpile-modules")(["gsap"]);

module.exports = withTM({
  images: {
    // Use an array of objects with hostname property
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**"
      },
    ],
  },
});
