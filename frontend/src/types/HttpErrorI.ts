type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;

export type HttpErrorI = {
    status: number;
    message: string;
    name: string;
    data?: unknown;
    code?: string;
    err?: JSONValue;
};
