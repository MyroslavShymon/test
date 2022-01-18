export declare class ConfigModule {
    static forRoot(): {
        module: typeof ConfigModule;
        providers: {
            provide: string;
            useValue: import("./services").ConfigService;
        }[];
        exports: string[];
    };
}
