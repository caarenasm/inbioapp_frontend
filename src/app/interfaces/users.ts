export interface Users {
    id: string;
    name: string;
    email: string;
    emailVerifiedAt?: Date;
    password?: string;
    twoFactorSecret?: string;
    twoFactorRecoveryCodes?: string;
    rememberToken?: string;
    currentTeamId?: number;
    profilePhotoPath?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
