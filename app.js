const qrcode = require("qrcode-terminal");
const { Client } = require("whatsapp-web.js");
const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", (msg) => {
  if (msg.body == "!todo") {
    msg.reply("Good Luck for your todo");
  } else if (msg.body == "!Hai") {
    msg.reply("Hello");
  } else if (msg.body == "!Way") {
    msg.reply("Apa?");
  } else if (msg.body == "!P") {
    msg.reply("q");
  } else {
    msg.reply("hello");
  }
});

client.initialize();
