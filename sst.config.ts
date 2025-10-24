/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "samplebook",
      home: "aws",
      removal: input?.stage === "production" ? "retain" : "remove",
    };
  },
  async run() {
    try {
      return new sst.aws.StaticSite("samplebook", {
        build: {
          command: "npx metrists build -o out",
          output: "out",
        },
        invalidation: {
          paths: "all",
          wait: true,
        },
      });
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
});
