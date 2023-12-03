import { ServerEvent } from "../../ServerEvent";

export class PlatformEvent extends ServerEvent {

    public static async create() {
        let instance : PlatformEvent = new PlatformEvent()
        return instance
    }

}