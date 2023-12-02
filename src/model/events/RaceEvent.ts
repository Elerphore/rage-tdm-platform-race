import {ServerEvent} from "./ServerEvent";
import { createCheckpoint } from "../../factory/checkpointFactory";

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
        this.movePlayersToEvent()
        this.checkpoints = this.generateCheckPoints()
        this.checkpoints[0].visible = true
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
    
    setPoints(_points : Vector3Mp[]) {
        this.points = _points
    }
    
    setCheckPoints(_checkpoints : CheckpointMp[]) {
        this.checkpoints = _checkpoints
    }
    
    hidePointFromPlayer(player: PlayerMp, checkpoint: CheckpointMp) {
        this.checkpoints.find((point) => point.id == checkpoint.id)?.hideFor(player)
    }
    
    showPointForPlayer(player: PlayerMp, checkpoint: CheckpointMp) {
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
}