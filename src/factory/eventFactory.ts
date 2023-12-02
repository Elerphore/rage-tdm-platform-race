import {ServerEvent} from "../model/events/ServerEvent";
import {RaceEvent} from "../model/events/RaceEvent";

export async function createEvent(eventName: String) {
    
    let event: ServerEvent | null = null
    
    switch (eventName) {
        case"race":
            event = await createRaceEvent()
        break;
        case "dm":
            console.log("no impl")
        break;
            case "platform":
                console.log("no impl")
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