import tmi from "tmi.js";
const config = require('./config');

const options0 = {
    options: {
        debug: true,
    },
    connection: {
        cluster: "aws",
        reconnect: true,
    },
    identity: {
        username: config.user,
        password: config.password,
    },
    channels: [config.channel],
}

const client0 = new tmi.client(options0);

export const MAIN_CLIENT = client0;