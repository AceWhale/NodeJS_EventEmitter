import EventEmitter from "node:events";
import { title } from "node:process";
const emitter = new EventEmitter();

emitter.on("click", (data) => {
    console.log("Clicked...", data)
});

emitter.emit("click", {title: "Add Product", width: "100px", height: "70px"});
emitter.emit("click", {title: "Cancel", width: "100px", height: "70px"});