module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Reactive Resume","short_name":"Reactive Resume","start_url":"/","background_color":"#212121","icon":"static/images/logo.png","orientation":"landscape","theme_color":"#212121","display":"standalone","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"7e44ab90313cf455a998271a1238282b"},
    },{
      plugin: require('../node_modules/gatsby-plugin-material-ui/gatsby-browser.js'),
      options: {"plugins":[],"stylesProvider":{"injectFirst":true}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
