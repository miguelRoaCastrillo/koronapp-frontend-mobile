module.exports = {
    root: true,
    extends: '@react-native-community',
    plugins: ['import'],
    settings: {
       'import/resolver': {
        node: {
            paths: ['src'],
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
                "@/navigators": "./src/navigators",
                "@/utils": "./src/utils",
                "@/scenes": "./src/scenes",
                "@/services": "./src/services"
            },
        },
      },
    },
};