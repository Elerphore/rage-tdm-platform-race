import { createEvent } from "../factory/eventFactory";
import { serverState } from "../state/state";

export async function startEvent(player: PlayerMp, fulltext: String, eventName: String) {
    if(serverState.currentActiveEvent != null) {
        console.log("You already have an active event.")
        return;
    }
    
    serverState.currentActiveEvent = await createEvent(eventName)
}

export function finishEvent() {
    serverState.destroyEvent()
    serverState.currentActiveEvent = null
}