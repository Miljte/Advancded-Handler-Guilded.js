const client = require("..");
const { GuilHub } = require("../Settings/config.js");

client.on('messageCreated', async (message) => {

    let prefix = GuilHub.Bot.Prefix;

    if (!message.serverId) return;

    if (message.createdByBotId) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);

    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd.toLowerCase()) ||  client.commands.find((cmds) => cmds.aliases && cmds.aliases.includes(cmd));

    if (!command) return;

    if (command) {

        command.run(client, message, args, prefix)

    }

})