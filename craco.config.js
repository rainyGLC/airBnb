const path = require('path')

const CracoLessPlugin = require('craco-less')

const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
    webpack: {
      alias:{
        "@":resolve("src"),
        "components":resolve("src/components"),
        "utils":resolve("src/utils"),
        // '@mui/styled-engine': '@mui/styled-engine-sc'
      },
    },
    plugins:[
      {
        //less
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: {  },
              javascriptEnabled: true,
            },
          },
        },
      },
    ],

}