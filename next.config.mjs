/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath:'/bsides',
    output: 'export',
    images: {
      loader: "custom",
      loaderFile: './imgixLoader.js'
    },
    webpack(config) {
      config.module.rules.push(
        {
          test: /\.(mp4|webm|ogg|swf|ogv)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        },
      );
      
      return config;
    },
    trailingSlash: true,
  };
  
  export default nextConfig;