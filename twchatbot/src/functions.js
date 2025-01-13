import {
    BROADCAST_CHANNEL,
    DISCORD_ANSWER,
    DISCORD_TRIGGERS,
    INSTA_ANSWER,
    INSTA_TRIGGERS,
    TIKTOK_ANSWER,
    TIKTOK_TRIGGERS,
    TWITTER_ANSWER,
    TWITTER_TRIGGERS
} from "./constants";


export function SEND_MESSAGE(client, send_msg){
    client.say(`${BROADCAST_CHANNEL}`, send_msg);
}

export function answer(client, message){

    let msg = "";

    if (message === DISCORD_TRIGGERS){
        msg = DISCORD_ANSWER;
    } else if(message === TWITTER_TRIGGERS){
        msg = TWITTER_ANSWER;
    } else if(message === INSTA_TRIGGERS){
        msg = INSTA_ANSWER;
    } else if(message === TIKTOK_TRIGGERS){
        msg = TIKTOK_ANSWER;
    }
    SEND_MESSAGE(client, msg);
}