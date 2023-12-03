import { ServerEvent } from "../ServerEvent";
import { RaceEvent } from "../mode/race/RaceEvent";

export async function createEvent(eventName: String) {
    
    let event: ServerEvent | null = null
    
    switch (eventName) {
        case"race":
            event = await createRaceEvent()
        break;
        case "dm":
            createDMEvent()
        break;
        case "platform":
            createPlatformEvent()
        break;
            
    }
    
    return event
}

async function createRaceEvent() {
    return await RaceEvent.create()
}

function createDMEvent() {

}

function createPlatformEvent() {

}