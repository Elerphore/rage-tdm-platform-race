import { ServerEvent } from "./ServerEvent"

export class ServerState {
    public currentActiveEvent: ServerEvent | null = null
    
    public destroyEvent() {
        this.currentActiveEvent = null
    }
}