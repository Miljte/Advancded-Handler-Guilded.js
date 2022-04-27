const fs = require('fs');

module.exports = (client) => {
    try {

        fs.readdirSync("./Events/").forEach((File) => {

            const events = fs.readdirSync("./Events/").filter((File) =>
                File.endsWith(".js")
            );

            for (let File of events) {

                let Pull = require(`../Events/${File}`);

                if (Pull.name) {

                    client.events.set(Pull.name, Pull);

                }

            }

            console.log((`[+]: ${File} Events Loaded Successfullly`));

        });

    } catch (e) {
        console.log(e)

        console.log('[-]: ' + e.message);

    }
}