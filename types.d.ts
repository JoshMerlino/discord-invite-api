declare type APIResponse = Record<string, unknown>;

declare interface Endpoint {
	route: string | string[];
	default(req: Express.Request, res: Express.Response): unknown;
}

declare interface Middleware {
	default(req: Express.Request, res: Express.Response, next: import("express").NextFunction): void | Promise<void>;
}

declare interface Runtime {
	default(app: Express.Application): void | Promise<void>;
}

declare interface Store {
    id: string;
    name: string;
    owner: string;
    ownerId: string;
    verified: boolean;
    memberCount: number | string;
    memberOnline: number | string;
    bannerURL: string | null;
    iconURL: string | null;
    inviteCodes: string[];
}
