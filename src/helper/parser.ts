const fs = require('fs/promises')

export async function parseCheckPoints(fileName: string) : Promise<Vector3Mp[]> {
    let strPoints = await fs.readFile(`points/${fileName}.json`, { encoding: 'utf8'})
    let filePoints: Vector3Mp[] = JSON.parse(strPoints)
    return filePoints
}