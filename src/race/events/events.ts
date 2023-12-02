import {serverState} from "../../state/state";
import {RaceEvent} from "../../model/events/RaceEvent";

mp.events.add("playerEnterCheckpoint", (player, checkpoint) => {
    if(serverState.currentActiveEvent instanceof RaceEvent) {
        if(serverState.currentActiveEvent.checkpoints[0].id == checkpoint.id) {
            
        }
        player.outputChatBox("CHECKPOINT COLLISION")
    }
});

function raceImplementation() {
    
}

function deathmatchImplementation() {
    
}

function platformImplementation() {
    
}

