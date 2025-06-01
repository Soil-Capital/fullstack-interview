module.exports = {
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 120,
    useTabs: false,
    tabWidth: 4,
    overrides: [
        {
            files: ['src/assets/translations/*.json', 'tsconfig.json', '*.yml'],
            options: {
                tabWidth: 2,
                singleQuote: false,
            },
        },
    ],
};
