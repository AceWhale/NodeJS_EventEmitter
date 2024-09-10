import EventEmitter from "node:events";
import { Buyer } from "./modules/Buyer.js";
import { Dice } from "./modules/Dice.js";
import { Logger } from "./modules/Logger.js";
import { log } from "node:console";

const emitter = new EventEmitter();

//#region class

// const listener = () => {
//     console.log("listener1 +");
// };

// emitter.on("connection", listener);
// emitter.addListener("connection", () =>{
//     console.log("listener2 +");
// });
// emitter.once("connection", () =>{
//     console.log("temp +");
// });
// emitter.emit("connection");
// console.log("-------");
// //emitter.off("connection", listener)
// emitter.removeListener("connection", listener);
// emitter.emit("connection");

///////////////////////

// const buyers = [
//     new Buyer("John Doe", "john@example.com", emitter),
//     new Buyer("Jane Smith", "jane@example.com", emitter),
//     new Buyer("Alice Johnson", "alice@example.com", emitter)
// ];
// emitter.emit('sales', 40);

//#endregion

/////////////////////// HW ///////////////////////////

// #region 1

emitter.on('click', () => {
    console.log('Event click 1');
});
emitter.on('click', () => {
    console.log('Event click 2');
});
emitter.on('click', () => {
    console.log();
});

emitter.emit('click');

// #endregion

//#region 2
emitter.once('error', () => {
    console.log('Error Once 1');
});
emitter.once('error', () => {
    console.log('Error Once 2');
});

emitter.emit('error');

emitter.once('error', () => {
    console.log();
});

emitter.emit('error');

//#endregion

//#region 3

const dice = new Dice(emitter);



dice.roll();
emitter.once('rolled', (result) => {
    console.log()
});
dice.roll();

//#endregion

//#region 4

const logger = new Logger(emitter)

logger.info("Info message")
logger.warning("Warning message")
logger.error("Error message")

//#endregion