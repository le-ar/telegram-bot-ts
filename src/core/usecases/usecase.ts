import Equatable from "../equatable";
import { Failure } from "../failures";

abstract class UseCase<Type, Params> {
    abstract execute(params: Params): Promise<Type | Failure>;
}

class NoParams extends Equatable {
}

export { UseCase, NoParams };