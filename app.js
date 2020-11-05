const wa = require("@open-wa/wa-automate");

wa.create().then((client) => start(client));

function start(client) {
  client.onMessage(async (message) => {
    console.log(message);
    const [a, b, c, d, e, ...rest] = message.body.split("");
    const sender = message.sender.pushname;
    const key = a + b + c + d + e;
    if (key === "#todo") {
      const messageNew = {
        body: rest.join("").trim(),
        timestamp: message.t,
        sender,
        chatid: message.chatid,
        imgProfil: message.sender.profilePicThumbObj.img,
      };
      await client.sendText(message.from, `🔥 Semangat 🔥 @${sender}`);
    }
  });
}
