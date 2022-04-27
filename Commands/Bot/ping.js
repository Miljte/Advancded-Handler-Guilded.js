module.exports = {
    name: "ping",
    aliases: ['p'],
    run: async (client, message, args) => {

        message.reply(`Pong!`);

    },
};
