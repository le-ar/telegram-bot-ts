abstract class Serializable {
    public static fromJson(): any {
        return null;
    }

    abstract toJsonString(): string;

    abstract toJsonObject(): { [key: string]: any };
}

export default Serializable;