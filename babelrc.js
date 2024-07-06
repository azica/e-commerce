export default function (api) {
    api.cache(true); // Caches the computed config

    const presets = [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript"
    ];

    const plugins = [
        [
            "babel-plugin-styled-components",
            {
                ssr: true,
                namespace: "my-styled-components-project",
                displayName: false,
                fileName: false
            }
        ]
    ];

    return {
        presets,
        plugins
    };
}
