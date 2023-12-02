import {serverState} from "../../state/state";
import {RaceEvent} from "../../model/events/RaceEvent";
import {PlatformEvent} from "../../model/events/PlatformEvent";
import {TDMEvent} from "../../model/events/TDMEvent";
import {createVehicle} from "../../factory/vehicleFactory";

mp.events.add("playerEnterVehicle", (player, vehicle, seat) => {
    let playersWithoutVehicle : PlayerMp[] = mp.players.toArray().filter(player => player.vehicle == null)

    if(playersWithoutVehicle.length > 0) {
        playersWithoutVehicle.forEach(player => player.outputChatBox("ВОЙТИ В АВТОМОБИЛЬ ПРИДУРОК"))
        return;
    }

    player.outputChatBox("Все игроки в автомобиле")
});

mp.events.add("playerEnterCheckpoint", (player, checkpoint) => {
    if(serverState.currentActiveEvent instanceof RaceEvent) {
        raceImplementation(player, checkpoint, serverState.currentActiveEvent)
    }
    if(serverState.currentActiveEvent instanceof PlatformEvent) {
        deathmatchImplementation()
    }

    if(serverState.currentActiveEvent instanceof TDMEvent) {
        platformImplementation()
    }

});

function raceImplementation(player: PlayerMp, checkpoint: CheckpointMp, event: RaceEvent) {
    if(event.checkpoints[0].id == checkpoint.id && player.vehicle == null) {
        const vehicle : VehicleMp = createVehicle(player.position, player.socialClub)
        player.putIntoVehicle(vehicle, 0)
    }
}

function deathmatchImplementation() {
    
}

function platformImplementation() {
    
}

