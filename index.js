const { Client } = require("guilded.js");
const { GuilHub } = require("./Settings/config.js");
const { Collection } = require("@discordjs/collection");
const fs = require("fs")
const client = new Client({ 
    token: GuilHub.Bot.Token
});

module.exports = client;

client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();
client.cooldowns = new Collection();
client.categories = fs.readdirSync("./Commands/");

["Cmd_Handler", "Event_Handler"].forEach((handler) => {
    require(`./Handlers/${handler}`)(client)
});

client.login();

/*

    MADE BY: MILJTE#8707 | 1ArEDyZm <--- ID
    Studio: GuilHub - https://guilded.gg/gui

*/