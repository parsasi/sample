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
    return new sst.aws.StaticSite("MySite", {
      build: {
        command: "cd .metrists && npm run build --force",
        output: ".metrists/out",
      },
    });
  },
});
