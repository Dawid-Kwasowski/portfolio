module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
     ? '/portfolio/'
     : '/',
   css: {
     loaderOptions: {
       sass: {
         prependData: `
            @import "@/assets/scss/_variables.scss";
            @import "@/assets/scss/_breakpoints.scss";
            @import "@/assets/scss/_mixins.scss";
         `
       }
     }
   }
 };