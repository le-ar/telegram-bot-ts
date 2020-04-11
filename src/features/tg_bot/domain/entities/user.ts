class User {
    id: number;
    isBot: boolean;
    firstName: string;
    lastName?: string;
    username?: string;
    languageCode?: string;
    canJoinGroups?: boolean;
    canReadAllGroupMessages?: boolean;
    supportsInlineQueries?: boolean;

    constructor(
        id: number,
        isBot: boolean,
        firstName: string,
        lastName?: string,
        username?: string,
        languageCode?: string,
        canJoinGroups?: boolean,
        canReadAllGroupMessages?: boolean,
        supportsInlineQueries?: boolean
    ) {
        this.id = id;
        this.isBot = isBot;
        this.firstName = firstName;
        this.lastName = lastName ?? null;
        this.username = username ?? null;
        this.languageCode = languageCode ?? null;
        this.canJoinGroups = canJoinGroups ?? null;
        this.canReadAllGroupMessages = canReadAllGroupMessages ?? null;
        this.supportsInlineQueries = supportsInlineQueries ?? null;
    }
}

export default User;