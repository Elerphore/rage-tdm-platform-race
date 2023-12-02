import { serverState } from "../../state/state";
import {createEvent} from "../../factory/eventFactory";

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