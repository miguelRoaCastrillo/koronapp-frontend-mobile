module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo'
    ],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // app config
            "@/assets": "./src/assets",
            "@/constants": "./src/constants",
            "@/theme": "./src/theme",
            "@/wrapper": "./src/AppWrapper",
            // building blocks
            "@/components": "./src/components",
            "@/copy": "./src/copy",
            "@/hooks": "./src/hooks",
            "@/navigation": "./src/navigation",
            "@/utils": "./src/utils",
            "@/scenes": "./src/scenes",
            "@/services": "./src/services"
          },
        },
      ],
    ],
  };
};

