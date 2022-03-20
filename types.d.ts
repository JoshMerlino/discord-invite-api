declare interface ServerStat {
    id: string;
    name: string;
    owner: string;
    ownerId: string;
    verified: boolean;
    memberCount: number;
    memberOnline: number;
    bannerURL: string | null;
    iconURL: string | null;
    inviteCodes: string[];
}
