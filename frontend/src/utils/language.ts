export const getLanguage = (language: string) => {
    if (language === 'fr') return 3;
    if (language === 'en') return 1;
    return 1; // Default en
};
