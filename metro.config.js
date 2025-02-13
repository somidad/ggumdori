const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);
// TODO: Add file extensions of assets you want to bundle
// config.resolver.assetExts.push("txt");

module.exports = config;
