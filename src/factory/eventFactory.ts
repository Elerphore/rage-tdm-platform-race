import { ServerEvent } from "../ServerEvent";
import { DeathMatchEvent } from "../mode/dm/DeathMatchEvent";
import { PlatformEvent } from "../mode/platform/PlatformEvent";
import { RaceEvent } from "../mode/race/RaceEvent";

export async function createEvent(eventName: String) : Promise<ServerEvent | null> {

    if(eventName == "race") return await createRaceEvent()
    if(eventName == "dm") return await createDMEvent()
    if(eventName == "platform") return await createPlatformEvent()

    return null
    
}

async function createRaceEvent() {
    return await RaceEvent.create()
}

async function createDMEvent() {
    return await DeathMatchEvent.create()
}

async function createPlatformEvent() {
    return await PlatformEvent.create()
}