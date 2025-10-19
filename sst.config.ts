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
          command: "npx metrists@0.5.0 build -o out --verbose",
          output: "out",
        },
      });
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
});
