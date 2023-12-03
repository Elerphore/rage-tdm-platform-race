export function movePlayersToEvent(point: Vector3Mp) {
    mp.players.forEach(player => {
        player.position = point
        player.spawn(point)
    })
}