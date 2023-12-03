import { serverState } from "../../state/state"
import { DeathMatchEvent } from "./DeathMatchEvent"

mp.events.add("playerDeath", async (player, reason, killer) => {
    if(serverState.currentActiveEvent instanceof DeathMatchEvent) {
        await serverState.currentActiveEvent.spawnPlayerAtRandomPoint(player)
    }
})