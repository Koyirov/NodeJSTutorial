import {MAIN_CLIENT} from "./clients";

MAIN_CLIENT.connect();

MAIN_CLIENT.on("message", (channel, userstate, message, self) => {

    if(self) return;

    switch(userstate["message-type"]) {
        case "action":
            // Do something
            break;
        case "chat":
            console.log(message);
            break;
        case "whisper":
            // Do something
            break;
        default:
            break;
    }
})