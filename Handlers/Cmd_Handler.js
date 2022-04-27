const fs = require('fs');

module.exports = (client) => {
    try {

        let Command = 0;
        fs.readdirSync("./Commands").forEach(Cmd => {
        
            let commands = fs.readdirSync(`./Commands/${Cmd}/`).filter((file) => file.endsWith(".js"));

            for (Cmds of commands) {
                let pull = require(`../Commands/${Cmd}/${Cmds}`);
                if (pull.name) {
                    client.commands.set(pull.name, pull);
                    Command++
                } else {
                    console.log(`[-]: ${Cmds} Not Ready`);
                    continue;
                }
                if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
            }

        })
        console.log(`[+]: ${Command} Loaded`);

    } catch (e) {
        console.log(e)

        console.log('[-]: ' + e.message);

    }
}