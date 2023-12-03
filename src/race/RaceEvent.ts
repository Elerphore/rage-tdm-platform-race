import { createCheckpoint } from "../factory/checkpointFactory";
import { createVehicle } from "../factory/vehicleFactory";
import { ServerEvent } from "../model/events/ServerEvent";

const fs = require('fs/promises')

export class RaceEvent extends ServerEvent {
    points : Vector3Mp[]  = []
    checkpoints : CheckpointMp[] = []
    
    public static async create() {
        let instance : RaceEvent = new RaceEvent()
        await instance.initialization()
        return instance
    }
    
    private async initialization() {
        this.points = await this.parseCheckPoints()
        this.startPoint = this.points[0]
        this.checkpoints = this.generateCheckPoints()
        this.checkpoints[0].visible = true

        this.movePlayersToEvent()
    }
    
    movePlayersToEvent() {
        let pt = this.startPoint!
        mp.players.forEach(player => {
            player.position = pt 
            player.spawn(pt)
        })
    }
    
    private generateCheckPoints() {
        return this.points.map!(point => createCheckpoint(point))
    }
    
    private async parseCheckPoints() : Promise<Vector3Mp[]> {
        let strPoints = await fs.readFile(`races/Race.json`, { encoding: 'utf8'})
        let filePoints: Vector3Mp[] = JSON.parse(strPoints)
        return filePoints
    }
    
    private hidePointFromPlayers(checkpoint: CheckpointMp) {
        checkpoint.visible = false
    }
    
    private showPointForPlayers(checkpoint: CheckpointMp) {
        checkpoint.visible = true
    }
    
    private hidePointFromPlayer(player: PlayerMp, checkpoint: CheckpointMp) {
        this.checkpoints.find((point) => point.id == checkpoint.id)?.hideFor(player)
    }

    private showPointForPlayer(player: PlayerMp, checkpoint: CheckpointMp) {
        if(this.checkpoints.indexOf(checkpoint) != (this.checkpoints.length - 1))
            this.checkpoints[this.checkpoints.indexOf(checkpoint) + 1].showFor(player)
    }
    
    destroyEvent() {
        super.destroyEvent()
        
        this.checkpoints.forEach(checkpoint => {
            checkpoint.destroy()
        })
        
        this.points = []
    }

    racePrepare(player: PlayerMp, checkpoint: CheckpointMp) {
        if(this.checkpoints[0].id == checkpoint.id && player.vehicle == null) {
            const vehicle : VehicleMp = createVehicle(player.position, player.socialClub)
            player.putIntoVehicle(vehicle, 0)
        }
    }

    raceStart() {
        let playersWithoutVehicle : PlayerMp[] = mp.players.toArray().filter(player => player.vehicle == null)

        if(playersWithoutVehicle.length > 0) {
            playersWithoutVehicle.forEach(player => player.outputChatBox("ВОЙТИ В АВТОМОБИЛЬ ПРИДУРОК"))
            return;
        }

        this.hidePointFromPlayers(this.checkpoints[0])
        this.showPointForPlayers(this.checkpoints[1])
    }

    raceProgression(player: PlayerMp, checkpoint: CheckpointMp) {
        const index = this.checkpoints.findIndex(point => checkpoint.id == point.id)
        if(index == 0) return;

        this.hidePointFromPlayer(player, this.checkpoints[index])

        if(index + 1 == this.checkpoints.length) return;

        this.showPointForPlayer(player, this.checkpoints[index])
    }

    raceImplementation(player: PlayerMp, checkpoint: CheckpointMp) {
        this.racePrepare(player, checkpoint)
        this.raceProgression(player, checkpoint)
    }

}