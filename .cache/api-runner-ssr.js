var plugins = [{
      plugin: require('/Users/jackstorment/Documents/TWS/StationABugFix/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/jackstorment/Documents/TWS/StationABugFix/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Reactive Resume","short_name":"Reactive Resume","start_url":"/","background_color":"#212121","icon":"static/images/logo.png","orientation":"landscape","theme_color":"#212121","display":"standalone","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"7e44ab90313cf455a998271a1238282b"},
    },{
      plugin: require('/Users/jackstorment/Documents/TWS/StationABugFix/node_modules/gatsby-plugin-prefetch-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":[{"family":"Lato","variants":["400","700"]},{"family":"Montserrat","variants":["400","500","600","700"]},{"family":"Nunito","variants":["400","600","700"]},{"family":"Open Sans","variants":["400","600","700"]},{"family":"Raleway","variants":["400","500","700"]},{"family":"Rubik","variants":["400","500","700"]},{"family":"Source Sans Pro","variants":["400","600","700"]},{"family":"Titillium Web","variants":["400","600","700"]}]},
    },{
      plugin: require('/Users/jackstorment/Documents/TWS/StationABugFix/node_modules/gatsby-plugin-material-ui/gatsby-ssr'),
      options: {"plugins":[],"stylesProvider":{"injectFirst":true}},
    },{
      plugin: require('/Users/jackstorment/Documents/TWS/StationABugFix/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
