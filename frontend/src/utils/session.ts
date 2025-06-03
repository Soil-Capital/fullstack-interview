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

export function getStorageUser() {
    try {
        const user = localStorage.getItem('user');
    
        return typeof user === 'string' && user.length
            ? JSON.parse(user)
            : null 
    } catch (e) {
        return null;
    }
}

export function setStorageUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
}