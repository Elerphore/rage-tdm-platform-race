const fs = require('fs/promises')

let points : Vector3Mp[]  = []

export function newPoint(player: PlayerMp) {
    points.push(player.position)
    player.outputChatBox("New Point Added")
}

export function listCoords(player: PlayerMp) {
    player.outputChatBox(JSON.stringify(points))
}

export async function createRaceFile(player: PlayerMp, fulltext: String, userFileName: String) {
    await fs.writeFile(`points/${userFileName}.json`, JSON.stringify(points))
    player.outputChatBox(`File with name: "${userFileName}.json" created`)
}

export async function spawnPoints(player: PlayerMp, fulltext: String, userFileName: String) {
    let strPoints = await fs.readFile(`points/${userFileName}.json`, { encoding: 'utf8'})
    let filePoints: Vector3Mp[] = JSON.parse(strPoints)

    filePoints.forEach(point => {
        mp.checkpoints.new(1, point, 10,
                           {
                               direction: new mp.Vector3(0, 0, 75),
                               color: [ 255, 255, 255, 255 ],
                               visible: true,
                               dimension: 0
                           });
    })

    console.log("spawnPoints completed")
}

export function vehicle(player: PlayerMp) {
    let pos: Vector3Mp = player.position
    mp.vehicles.new(mp.joaat("turismor"), new mp.Vector3(pos.x, pos.y, pos.z), {numberPlate: "ADMIN",color: [[0, 255, 0],[0, 255, 0]]});
}