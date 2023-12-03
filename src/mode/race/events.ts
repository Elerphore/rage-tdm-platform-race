import { serverState } from "../../state/state";
import { RaceEvent } from "./RaceEvent";

mp.events.add("playerEnterVehicle", (player, vehicle, seat) => {
    if(serverState.currentActiveEvent instanceof RaceEvent) {
        serverState.currentActiveEvent.raceStart()
    }
});

mp.events.add("playerEnterCheckpoint", (player, checkpoint) => {
    if(serverState.currentActiveEvent instanceof RaceEvent) {
        serverState.currentActiveEvent.raceImplementation(player, checkpoint)
    }
});