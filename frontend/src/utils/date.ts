export const formatDate = (isoCode: string, value: Date | undefined, defaultValue = '') => {
    return value ? new Date(value).toLocaleDateString(isoCode, dateOptions) : defaultValue;
};

const dateOptions: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
