
export const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

export const validatePassword = (password: string): boolean => {
    const re = /^(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
    return re.test(password);
}
