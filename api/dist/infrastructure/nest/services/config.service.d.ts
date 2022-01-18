export declare class ConfigService {
    private env;
    constructor(env: {
        [k: string]: string | undefined;
    });
    getValue(key: string): string;
    getPort(): string;
    isProduction(): boolean;
}
