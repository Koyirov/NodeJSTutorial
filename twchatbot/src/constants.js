const config = require('./config');

// Generals
export const BROADCAST_CHANNEL = config.channel;

export const BOT_PREFIX = "!";

// Triggers
export const CHAT_TRIGGER = [
        {
        trigger: "!discord",
        answer: "Meinen Discord findest du hier ->"
    },
    {
        trigger: "!twitter",
        answer: "Meinen Twitter findest du hier ->"
    },
    {
        trigger: "!insta",
        answer: "Meinen Insta findest du hier ->"
    },
    {
        trigger: "!tiktok",
        answer: "Meinen TikTok findest du hier ->"
    },
]