export function createVehicle(pos: Vector3Mp, plate: string = "clown", vehicleName: string = "gauntlet") : VehicleMp {
    return mp.vehicles.new(mp.joaat(vehicleName), pos, {numberPlate: plate,color: [[0, 255, 0],[0, 255, 0]]});
}