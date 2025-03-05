//  ********************************   Task D     *****************************************
class Shop {
  now = new Date().toLocaleTimeString();
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }
  qoldiq() {
    console.log(
      `Hozir ${this.now} da ${this.non}ta non, ${this.lagmon}ta lagmon, ${this.cola}ta cola mavjud!`
    );
  }
  sotish(mahsulot, son) {
    if (mahsulot === "non") {
      this.non -= son;
    } else if (mahsulot === "lagmon") {
      this.lagmon -= son;
    } else if (mahsulot === "cola") {
      this.cola -= son;
    } else {
      console.log(
        "iltimos dokonda bor mahsulot tanlang! Masalan: cola, non, lagmon"
      );
    }
  }
  qabul(mahsulot, son) {
    if (mahsulot === "non") {
      this.non += son;
    } else if (mahsulot === "lagmon") {
      this.lagmon += son;
    } else if (mahsulot === "cola") {
      this.cola += son;
    } else {
      console.log(
        "iltimos dokonda bor mahsulot tanlang! Masalan: cola, non, lagmon"
      );
    }
  }
}
const shop = new Shop(4, 5, 2);
shop.qoldiq();
shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qabul("fanta", 4);
shop.qoldiq();
//  ********************************   Task C     *****************************************
// function checkContent(word1, word2) {
//   if (typeof word1 === "string" && typeof word2 === "string") {
//     return (
//       word1.split("").sort().toString() === word2.split("").sort().toString()
//     );
//   } else {
//     return "Please enter valid strings.";
//   }
// }
// console.log(checkContent("hello", "olleh"));
// console.log(checkContent("mit24group", "groupmit24"));
// console.log(checkContent("M", "m"));
// console.log(checkContent(1, "1"));

// ********************************   Task B     *****************************************

// function countDigit(word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] >= "0" && word[i] <= "9") {
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(countDigit("hell212otheewfew23123re"));

// ********************************   Task A     *****************************************
// Bu code:
// case-sensitivy hisoblanadi. ya'ni "A" va "a" teng emas
// faqat string qiymat qabul qiladi
// function countLetter(letter, word) {
//   let count = 0;
//   if (typeof letter !== "string" || typeof word !== "string")
//     return "please enter a valid letter and word";
//   else {
//     for (let x of word) {
//       if (x === letter) {
//         count++;
//       }
//     }
//     return count;
//   }
// }

// const result = countLetter("s", "Assessment");
// console.log(result);
