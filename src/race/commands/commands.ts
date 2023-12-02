const commandImplementation = require(`./impl/CommandsImplementation`)

mp.events.addCommand("newPoint", commandImplementation.newPoint);
mp.events.addCommand("listPoints", commandImplementation.listCoords);
mp.events.addCommand("createRaceFile", commandImplementation.createRaceFile);
mp.events.addCommand("spawnPoints", commandImplementation.spawnPoints);

mp.events.addCommand("vehicle", commandImplementation.vehicle);
