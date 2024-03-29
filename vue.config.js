const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        win: {
          icon: "public/icon.png",
        },
        mac: {
          icon: "public/icon.png",
        },
      },
    },
  },
});
