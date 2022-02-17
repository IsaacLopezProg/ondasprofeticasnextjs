module.exports = {
  reactStrictMode: true,
  
}

// next.config.js images
// const withImages = require('next-images')
// module.exports = withImages({
//   fileExtensions: ["jpg", "jpeg", "png", "svg", "gif", "ico", "webp", "jp2", "avif"],
//   webpack(config, options) {
//     return config
//   }
// })

module.exports = {
  images: {
    domains: ["www.paypal.com","https://www.paypalobjects.com","cdn.builder.io"],
  },
}