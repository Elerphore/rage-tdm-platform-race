const implementation = require('./implementation')

mp.events.addCommand("startEvent", implementation.startEvent);
mp.events.addCommand("finishEvent", implementation.finishEvent);