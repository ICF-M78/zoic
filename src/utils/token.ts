export const getToken = (): string | null => {
    const token = sessionStorage.getItem('token');
    if (!token) {
        return null;
    } else {
        return token;
    }
};

export const setToken = (token: string): void => {
    sessionStorage.setItem('token', token);
};
