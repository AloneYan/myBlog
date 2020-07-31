const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require("customize-cra");
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,//或者css, true代表运用less
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#e889b7',
      '@link-color': '#e889b7',
      '@font-size-base': '14px',
      '@success-color': '#e889b7'
    }
  }),
  addWebpackAlias({
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@api': path.resolve(__dirname, 'src/api'),
    '@util': path.resolve(__dirname, 'src/util'),
    '@components': path.resolve(__dirname, 'src/components')
  })
);