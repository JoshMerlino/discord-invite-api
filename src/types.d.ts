declare type APIResponse = Record<string, unknown>;

declare interface Endpoint {
	route: string | string[];
	default(req: Request, res: Response): unknown;
}

declare interface Middleware {
	default(req: Request, res: Response, next: NextFunction): void | Promise<void>;
}

declare interface Runtime {
	default(app: Express): void | Promise<void>;
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
