// password specific rules

const specialCharactersMatch = /^(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])/;

const digitMatch = /^(?=.*[0-9])/;

const minLength = 8;

// UI related things

const newGrey = '#4D4F45';

export const PasswordRules = {
    specialCharactersMatch,
    digitMatch,
    minLength,
};

export const Colors = {
    newGrey,
};
