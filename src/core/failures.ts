class Failure {
    private message: string;

    constructor(message?: string) {
        this.message = message ?? 'Error';
    }

    getMessage(): string {
        return this.message;
    }
}

class FailureApi extends Failure { }

class FailureUnauthorized extends Failure { }

class FailureWrongStructure extends Failure { }

export { Failure, FailureApi, FailureUnauthorized, FailureWrongStructure };