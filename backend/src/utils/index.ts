// This file contains utility functions that can be reused throughout the application. 
// It may include functions for formatting data, generating tokens, or other helper functions. 

export const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
};

export const generateRandomString = (length: number): string => {
    return Math.random().toString(36).substring(2, 2 + length);
};