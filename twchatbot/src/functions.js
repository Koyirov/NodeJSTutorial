import {BROADCAST_CHANNEL, DISCORD_ANSWER} from "./constants";


export function SEND_MESSAGE(client, send_msg){
    client.say(`${BROADCAST_CHANNEL}`, send_msg);
}

export function answer(client){
    SEND_MESSAGE(client, DISCORD_ANSWER);
}