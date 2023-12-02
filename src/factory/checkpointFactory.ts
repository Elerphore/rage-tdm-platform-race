export function createCheckpoint(point: Vector3Mp) : CheckpointMp {
    return mp.checkpoints.new(1, point, 10,
                       {
                           direction: new mp.Vector3(0, 0, 75),
                           color: [ 255, 255, 255, 255 ],
                           visible: false,
                           dimension: 0
                       })
}