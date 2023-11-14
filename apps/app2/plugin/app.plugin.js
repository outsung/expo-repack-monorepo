const { withPlugins } = require("expo/config-plugins");
const withRepack = require("./withRepack");

const plugins = [withRepack];

/** @type {import('@expo/config-plugins').ConfigPlugin} */
module.exports = (config) => withPlugins(config, plugins);
