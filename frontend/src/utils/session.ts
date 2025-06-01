export function setStorageToken(token: string, remember: boolean) {
    if (remember) {
        localStorage.setItem('token', token);
        return;
    }
    sessionStorage.setItem('token', token);
}

export function getStorageToken() {
    return localStorage.getItem('token') ? localStorage.getItem('token') : sessionStorage.getItem('token');
}

export function clearStorageToken() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
}
