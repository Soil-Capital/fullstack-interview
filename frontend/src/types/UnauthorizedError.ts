class UnauthorizedError extends Error {
    constructor(message?: string, public code?: string, public data?: unknown) {
        super(message ?? 'Unauthorized');
        this.name = 'UnauthorizedError';
        this.code = code;
        this.data = data;
    }
}

export default UnauthorizedError;
