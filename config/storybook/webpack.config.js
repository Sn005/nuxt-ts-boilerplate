const path = require('path')

const srcPath = path.resolve(__dirname, '../../src')

module.exports = (storybookBaseConfig, env, defaultConfig) => {
  defaultConfig.resolve.alias['@'] = path.resolve(__dirname, srcPath)
  defaultConfig.resolve.alias['~'] = path.resolve(__dirname, srcPath)
  return defaultConfig
}
