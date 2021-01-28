let path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  chainWebpack: (config) => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    config
      .plugin('vue-loader')
      .use(VueLoaderPlugin)

    // 配置别名
    config.resolve.alias.set('@', path.join(__dirname, './src'))
    
    // config.module.rule('js').include.add(/node_modules\/vue-plyr\/.*/)
    // 配置兼容性
    config.resolve.alias.set('querystring', 'querystring-browser')
    // config.entry('main').add('babel-polyfill') // main是入口js文件
    config.entry.app = ['babel-polyfill', './src/main.js']
  },
  css: {
    loaderOptions: {
      less: {}
    }
  },
  devServer: {
    // 配置代理
    proxy: {
      '/api': {
        // target: 'http://39.98.210.75',
        // target: 'http://47.115.3.230',
        target: 'https://future.zbgwc.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    port: 80,
    disableHostCheck: true
  },
  transpileDependencies: [
    'vue-plyr'
  ]
}
// server {
//   listen       80;
//   server_name  floweradmin.asflower.store;

//   #charset koi8-r;

//   #access_log  logs/host.access.log  main;
//   location  ~ /api/ {
//           rewrite "^/api/(.*)$" /$1 break;
//           proxy_pass https://asflower.store;
//           proxy_set_header Host $host:$server_port;
//    }

//   location / {
//       root   html/flower-miniprogram-admin/dist;
//       index  index.html index.htm;
//       try_files $uri $uri/ /index.html;
//   }

//   error_page   500 502 503 504  /50x.html;
//   location = /50x.html {
//       root   html;
//   }

// }
// server {
//   listen       80;
//   server_name  floweradmin.asflower.store;

//   #charset koi8-r;

//   #access_log  logs/host.access.log  main;
//   location  ~ /api/ {
//           rewrite "^/api/(.*)$" /$1 break;
//           proxy_pass https://asflower.store;
//           proxy_set_header Host $host:$server_port;
//    }

//   location / {
//       root   html/flower-miniprogram-admin/dist;
//       index  index.html index.htm;
//       try_files $uri $uri/ /index.html;
//   }

//   error_page   500 502 503 504  /50x.html;
//   location = /50x.html {
//       root   html;
//   }

// }

// server {
//         listen       80;
//         server_name  fadmin.zbgwc.com;

//         #charset koi8-r;

//         #access_log  logs/host.access.log  main;
//         location  ~ /api/ {
//                 rewrite "^/api/(.*)$" /$1 break;
//                 #rewrite /api/(.*) /$1 break;
//                 # proxy_pass http://47.115.3.230;
//                 proxy_pass https://future.zbgwc.com;
//                 proxy_set_header Host $host:$server_port;
//          }

//         location / {
//             root   html/booksthefeature-admin/dist;
//             index  index.html index.htm;
//             try_files $uri $uri/ /index.html;
//         }

//         error_page   500 502 503 504  /50x.html;
//         # To allow POST on static pages 允许静态页使用POST方法
//         # error_page  405 =200 $uri;
//         location = /50x.html {
//             root   html;
//         }

//     }