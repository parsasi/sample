/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "aws-static-site",
      home: "aws",
      removal: input?.stage === "production" ? "retain" : "remove",
    };
  },
  async run() {
    try {
      return new sst.aws.StaticSite("MySite", {
        build: {
          command: "npx metrists build -o .metrists --verbose",
          output: ".metrists",
        },
      });
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
});
