import {
    BROADCAST_CHANNEL,
    CHAT_TRIGGER,
} from "./constants";


export function SEND_MESSAGE(client, send_msg){
    client.say(`${BROADCAST_CHANNEL}`, send_msg);
}

export function answer(client, message){

    let msg = "";

    CHAT_TRIGGER.forEach((element, index) => {
        if (message === element.trigger){
            msg = element.answer;
            SEND_MESSAGE(client, msg);
        }
    });
}