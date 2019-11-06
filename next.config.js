// module.exports = {
//     webpack(config) {
//       config.module.rules.push({
//         test: /\.svg$/,
//         use: ['@svgr/webpack'],
//       });
  
//       return config;
//     }
//   };



// const withImages = require('next-images')
// module.exports = withImages()

// const withSass = require('@zeit/next-sass')
// module.exports = withSass({
//   cssModules: true
// })

const scss=require('@zeit/next-sass');
const image=require("next-images");
module.exports=scss(image()),{
exportPathMap: async function(defaultPathMap){
return{
"/department/create":{ page : "/dashboard/newDepartment" }
}
}
}