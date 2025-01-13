import { MAIN_CLIENT } from "./clients";

// Functions
import { answer } from "./functions";

// Triggers
import { BOT_PREFIX } from "./constants";

MAIN_CLIENT.connect();

MAIN_CLIENT.on("message", (channel, userstate, message, self) => {

    if(self) return;

    switch(userstate["message-type"]) {
        case "action":
            // Do something
            break;
        case "chat":
            // Wenn Nachricht mit Ausrufezeichen beginnt
            if (message.charAt(0) === BOT_PREFIX){
                answer(MAIN_CLIENT, message);
            }
            break;
        case "whisper":
            // Do something
            break;
        default:
            break;
    }
})