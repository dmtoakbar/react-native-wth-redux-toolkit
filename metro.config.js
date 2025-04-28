// metro.config.js
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Ensure Metro knows about .ts and .tsx
defaultConfig.resolver.sourceExts = [...defaultConfig.resolver.sourceExts, 'ts', 'tsx'];

module.exports = mergeConfig(defaultConfig, {});
