module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            "@babel/preset-env",
            {
              "targets": {
                "node": "10"
              }
            }
          ],
        "@babel/typescript",
        "@babel/preset-react"
    ];

    const plugins = [
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread",
        "@babel/plugin-syntax-dynamic-import",
    ];

    return {
        presets,
        plugins
    };
}
