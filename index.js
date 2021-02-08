const api = require("kahoot.js-updated");
const client = new api();
const input = require("readline-sync");

var pin = input.question("PIN\n> ");
pin = parseInt(pin, 10);

client.join(pin, "bₒₜ");

client.on("Joined", () => {
  console.log("bₒₜ joined the kahoot.");
});

client.on("QuizStart", () => {
  console.log("The quiz has started, bₒₜ is ready.");
});

client.on("QuestionStart", (question) => {
  console.log("Recieved question, answering the correct.");
  console.log(question);
});

client.on("QuestionReady", (q) => {
  console.log("Working on that...");
});

client.on("QuestionEnd", (q) => {
  console.log("Question ended, waiting for a new one...");
  console.log(q);
});

client.on("QuizEnd", (o) => {
  console.log("Quiz ended");
  console.log(o);
});

client.on("Podium", (t) => {
  console.log("podium");
  console.log(t);
});

client.on("Disconnect", (r) => {
  console.log("diconnected: " + r);
});
