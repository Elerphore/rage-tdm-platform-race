import {serverState} from "../../state/state";
import {RaceEvent} from "../../model/events/RaceEvent";
import {PlatformEvent} from "../../model/events/PlatformEvent";
import {TDMEvent} from "../../model/events/TDMEvent";
import {createVehicle} from "../../factory/vehicleFactory";

mp.events.add("playerEnterVehicle", (player, vehicle, seat) => {
    if(serverState.currentActiveEvent instanceof RaceEvent) {
        serverState.currentActiveEvent.raceStart()
    }
});

mp.events.add("playerEnterCheckpoint", (player, checkpoint) => {
    if(serverState.currentActiveEvent instanceof RaceEvent) {
        serverState.currentActiveEvent.racePrepare(player, checkpoint)
        serverState.currentActiveEvent.raceProgression(player, checkpoint)
    }
    if(serverState.currentActiveEvent instanceof PlatformEvent) {
        deathmatchImplementation()
    }

    if(serverState.currentActiveEvent instanceof TDMEvent) {
        platformImplementation()
    }

});



function deathmatchImplementation() {
    
}

function platformImplementation() {
    
}

