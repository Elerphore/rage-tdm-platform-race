const eventCommandImplementation = require('../impl/CommandsImplementation')

mp.events.addCommand("startEvent", eventCommandImplementation.startEvent);
mp.events.addCommand("finishEvent", eventCommandImplementation.finishEvent);