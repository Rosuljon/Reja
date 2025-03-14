// console.log("Jack Ma maslahatlari");

const list = [
  "yaxshi talaba buling", //0-20
  "togri boshliq tanlang va koproq hato qiling", //20-30
  "uzingizni ishlaringizni boshlang", //30-40
  "siz kuchli bolgan narsalarni qiling", //40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi dam oling, foydasi yoq", //60~
];

// ********************************   Callback function      *****************************************

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a <= 30) callback(null, list[1]);
//   else if (a <= 40) callback(null, list[2]);
//   else if (a <= 50) callback(null, list[3]);
//   else if (a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else console.log("javob:", data);
// });
// console.log("passed here 1");

// ********************************   Async function, then(), catch(), Promise     *****************************************

// async function maslahatBering(a, callback) {
//   if (typeof a !== "number") throw new Error("Enter a number");
//   else if (a <= 20) return list[0];
//   else if (a <= 30) return list[1];
//   else if (a <= 40) return list[2];
//   else if (a <= 50) return list[3];
//   else if (a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

// ********************************   Async function, await     *****************************************
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(65);
//   console.log(javob);
//   javob = await maslahatBering(45);
//   console.log(javob);
// }
// run();
