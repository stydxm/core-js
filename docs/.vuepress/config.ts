import { defineUserConfig } from "vuepress";
import { getDirname, path } from "@vuepress/utils";
import searchPlugin from "@vuepress/plugin-search";
import shikiPlugin from "@vuepress/plugin-shiki";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  lang: "en-US",
  title: "Core-JS",
  description: "Modular standard library for JavaScript",
  locales: {
    "/": {
      lang: "en-US",
      title: "Core-JS Documentation",
      description: "Modular standard library for JavaScript",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Core-JS 文档",
      description: "模块化 JavaScript 标准库",
    },
  },
  theme,
  alias: {
    "@compat-tests": () =>
      path.resolve(__dirname, "..", "..", "tests", "compat", "tests.js"),
  },
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@docs-root/, path.resolve(__dirname, "..")),
    },
  },
  plugins: [
    searchPlugin(),
    shikiPlugin({
      theme: "one-dark-pro",
    }),
  ],
});
