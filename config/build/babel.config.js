/* eslint-disable import/no-commonjs */
const createBabelPresets = require("./create-babel-presets.js");
const createBabelPlugins = require("./create-babel-plugins.js");

// This config is used for Jest testing here in this repository, only.
module.exports = {
    assumptions: {
        constantReexports: true,
    },
    presets: createBabelPresets({
        platform: "browser",
        format: "cjs",
    }),
    plugins: createBabelPlugins({
        platform: "browser",
        format: "cjs",
    }),
};