

const {
  override,
  fixBabelImports,
  addDecoratorsLegacy,
  addLessLoader,
  overrideDevServer,
  addWebpackAlias,
  adjustStyleLoaders,
  setWebpackPublicPath
} = require("customize-cra");

const path = require("path");

const addProxy = () => (configFunction) => {
  configFunction.proxy = {
    "/api": {
      target: "http://zhiku.wuxikx.org.cn/",
      changeOrigin: true, // 是否改变域名
      ws: true,
      pathRewrite: {
        "^/api": ""
      }
    },
    "/data": {
      target: "http://zhiku.wuxikx.org.cn/",
      // target: "http://szst.suzhou.gov.cn/",
      changeOrigin: true, // 是否改变域名
      ws: true

    },
    "/attachment": {
      target: "http://zhiku.wuxikx.org.cn/",
      // target: "http://szst.suzhou.gov.cn/",
      changeOrigin: true, // 是否改变域名
      ws: true

    }
  };

  return configFunction;
}

module.exports = {
  webpack: override(
    setWebpackPublicPath(process.env.ROOT_PATH),
  
    addDecoratorsLegacy(), // 配置装饰器
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    }),
    addLessLoader({
      strictMath: true,
      noIeCompat: true,
      modifyVars: {
        "@primary-color": "#1DA57A", // for example, you use Ant Design to change theme color.
      },
      cssLoaderOptions: {}, // .less file used css-loader option, not all CSS file.
      cssModules: {
        localIdentName: "[path][name]__[local]--[hash:base64:5]", // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
      },
      sourceMap: true
    }),
    // addLessModule(),
    addWebpackAlias({
      ["@"]: path.resolve(__dirname, "src"),
      ["@pages"]: path.resolve(__dirname, "src/pages"),
      ["@components"]: path.resolve(__dirname, "src/components"),
      ["@imgs"]: path.resolve(__dirname, "src/imgs"),
      ["@assets"]: path.resolve(__dirname, "src/assets"),
      ["@service"]: path.resolve(__dirname, "src/service"),
    }),
    adjustStyleLoaders(({ use: [, css, postcss, resolve, processor] }) => {
      css.options.sourceMap = true;         // css-loader
      postcss.options.sourceMap = true;     // postcss-loader
      // when enable pre-processor,
      // resolve-url-loader will be enabled too
      if (resolve) {
        resolve.options.sourceMap = true;   // resolve-url-loader
      }
      // pre-processor
      if (processor && processor.loader.includes('sass-loader')) {
        processor.options.sourceMap = true; // sass-loader
      }
    })
  ),
  devServer: overrideDevServer(
    addProxy(),
  )

}

// antd-mobile PostCSS && rem 配置

// 移动端使用 rem 布局时，会借助 PostCSS 处理 px 到 rem 单位的转换。

// const {
//     override,
//     addLessLoader,
//     addPostcssPlugins,
//     fixBabelImports,
// } = require("customize-cra");

// module.exports = override(
//     addLessLoader(),
//     addPostcssPlugins([require("postcss-px2rem-exclude")({
//         remUnit: 16,
//         propList: ['*'],
//         exclude: ''
//     })]),
//     fixBabelImports('import', {
//         libraryName: 'antd-mobile',
//         style: 'css',
//     }),
// );
// 需要注意的是和 addLessLoader 一起使用时，addPostcssPlugins 要放在后面，这和直接使用 webpack 配置是一样的顺序。

// 禁用 ManifestPlugin
// const { override, } = require('customize-cra');


// const removeManifest = () => config => {
//     config.plugins = config.plugins.filter(
//         p => p.constructor.name !== "ManifestPlugin"
//     );
//     return config;
// };


// module.exports = {
//     webpack: override(
//         removeManifest(),
//     ),
// }


// 添加多页面入口
// 首先安装react-app-rewire-multiple-entry。

// npm install react-app-rewire-multiple-entry --save-dev
// 然后在config-overrides.js配置：

// const { override, overrideDevServer } = require('customize-cra');

// const multipleEntry = require('react-app-rewire-multiple-entry')([{
//     entry: 'src/pages/options.tsx',
//     template: 'public/options.html',
//     outPath: '/options.html',
// }]);

// const addEntry = () => config => {

//     multipleEntry.addMultiEntry(config);
//     return config;
// };

// const addEntryProxy = () => (configFunction) => {
//     multipleEntry.addEntryProxy(configFunction);
//     return configFunction;
// }

// module.exports = {
//     webpack: override(
//         addEntry(),
//     ),
//     devServer: overrideDevServer(
//         addEntryProxy(),
//     )
// }



// https://zhuanlan.zhihu.com/p/96103181?utm_source=wechat_session