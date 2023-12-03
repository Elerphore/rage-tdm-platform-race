import { ServerEvent } from "../../ServerEvent";
import { delay } from "../../helper/delay";
import { parseCheckPoints } from "../../helper/parser";

export class DeathMatchEvent extends ServerEvent {

    points: Vector3Mp[] = []

    public static async create() {
        let instance : DeathMatchEvent = new DeathMatchEvent()
        instance.points = await parseCheckPoints("dm")
        return instance
    }

    async spawnPlayerAtRandomPoint(player: PlayerMp) {
        await delay(5000)
        const randomPoint = this.points[Math.floor(Math.random() * this.points.length)]
        player.spawn(randomPoint)
    }

}