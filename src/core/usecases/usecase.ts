import { Failure } from "../failures";

abstract class UseCase<Type, Params> {
    abstract execute(params: Params): Promise<Type | Failure>;
}

class NoParams {
}

export { UseCase, NoParams };