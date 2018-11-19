const CopyWebpackPlugin = require('copy-webpack-plugin')
const withOffline = require('next-offline')

module.exports = withOffline({
  workboxOpts: {
    importScripts: ['./sw.js'],
    runtimeCaching: [{ urlPattern: /^https?.*(?<!mp4)$/, handler: 'networkFirst' }]
  },
  webpack: (config) => {
    // this will output your push listener file to .next folder
    // check CopyWebpackPlugin docs if you want to change the destination (e.g. /static or /.next/static)
    config.plugins.push(new CopyWebpackPlugin(['./sw.js']));
    return config
  }
});
