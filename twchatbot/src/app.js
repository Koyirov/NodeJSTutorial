import {MAIN_CLIENT} from "./clients";

// Functions
import { getMessage } from "./functions";

// Triggers
import { DISCORD_TRIGGERS } from "./constants";

MAIN_CLIENT.connect();

MAIN_CLIENT.on("message", (channel, userstate, message, self) => {

    if(self) return;

    switch(userstate["message-type"]) {
        case "action":
            // Do something
            break;
        case "chat":
            if (message === DISCORD_TRIGGERS){
                getMessage(message);
            }
            break;
        case "whisper":
            // Do something
            break;
        default:
            break;
    }
})