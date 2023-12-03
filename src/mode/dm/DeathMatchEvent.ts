import { ServerEvent } from "../../ServerEvent";
import { parseCheckPoints } from "../../helper/parser";

export class DeathMatchEvent extends ServerEvent {

    points: Vector3Mp[] = []

    public static async create() {1
        let instance : DeathMatchEvent = new DeathMatchEvent()
        instance.points = await parseCheckPoints("dm")
        return instance
    }

    spawnPlayerAtRandomPoint(player: PlayerMp) {
        const randomPoint = this.points[Math.floor(Math.random() * this.points.length)]
        player.spawn(randomPoint)
    }

}