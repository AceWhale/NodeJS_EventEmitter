//console.log(process/argv);
// import { User } from "./User.js"
// const user = new User();
// user.show();
// import test from "./modules/User.js"
// const user = new test();
// user.show();

const __dirname = import.meta.dirname;
const __filename = import.meta.filename;
console.log("dirname:",__dirname);
console.log("filename:",__filename);