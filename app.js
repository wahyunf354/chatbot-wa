const wa = require("@open-wa/wa-automate");
const mongoose = require("mongoose");
const Todo = require("./model/todos");

// (async () => {
// connect to mongo
mongoose.connect(
  "mongodb://grub-su:grub-su@cluster0-shard-00-00.7939g.mongodb.net:27017,cluster0-shard-00-01.7939g.mongodb.net:27017,cluster0-shard-00-02.7939g.mongodb.net:27017/db_grub_su?ssl=true&replicaSet=atlas-1474i3-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("db connect");
});
// })();

wa.create().then((client) => start(client));

function start(client) {
  client.onMessage(async (message) => {
    const [a, b, c, d, e, ...rest] = message.body.split("");
    const sender = message.sender.pushname;
    const key = a + b + c + d + e;
    if (key === "#todo") {
      const todoNew = new Todo({
        body: rest.join("").trim(),
        timestamp: message.t,
        sender,
        chatId: message.chatId,
        imgProfil: message.sender.profilePicThumbObj.img,
      });
      await todoNew.save(async (err) => {
        if (err) return handleError(err);
        await client.sendText(message.from, `🔥 Semangat 🔥 @${sender}`);
      });
    }
  });
}
