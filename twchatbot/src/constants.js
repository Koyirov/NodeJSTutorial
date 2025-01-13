const config = require('./config');
// Generals
export const BROADCAST_CHANNEL = config.channel;

export const BOT_PREFIX = "!";

// Triggers
export const CHAT_TRIGGER = [
    "!discord",
    "!twitter",
    "!insta",
    "!tiktok"
]

// Answers
export const ANSWERS = [
    "Meinen Discord findest du hier ->",
    "Meinen Twitter findest du hier ->",
    "Meinen Insta findest du hier ->",
    "Meinen TikTok findest du hier ->"
];