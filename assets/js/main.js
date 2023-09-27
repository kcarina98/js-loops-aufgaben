//# loops

// - level 1_1
console.log("%c Level 1-1", "color: tomato; background-color: yellow");

for (let i = 1; i <= 10; i++) {
  console.log("Hello World " + i);
}

// - level 1_2
console.log("%c Level 1-2", "color: tomato; background-color: yellow");
let numArray = [];

for (let i = 0; i <= 10; i++) {
  numArray.push(i);
  console.log(numArray);
}

//! Wie mache ich daraus nur ein Array?

// - level 1_4
console.log("%c Level 1-4", "color: tomato; background-color: yellow");

const names = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]) + "<br>";
}

// - level 2_1
console.log("%c Level 2-1", "color: tomato; background-color: yellow");

const num = Number("001");

for (let i = 1; i <= 100; i++) {
  if (i > 99) {
    console.log(`image_${i}.jpg`);
  } else if (i > 9) {
    console.log(`image_0${i}.jpg`);
  } else {
    console.log(`image_00${i}.jpg`);
  }
}

// * Deklariere die Funktion imageArray. Deklariere im Funktionskörper die Variable returnArray als leeres Array.
// * Schreibe anschließend eine for-Schleife und nutze push() und Conditional Statements (if, else if, else).
// ! das habe ich nicht gemacht

// - level 2_2
console.log("%c Level 2-2", "color: tomato; background-color: yellow");

function loopMe() {
  let o = Number(document.querySelector("#o").value);

  for (let i = -1; i < o; i++) {
    document.querySelector(".loop").innerHTML = ["L" + "o".repeat(o) + "p"];
  }
}

// - level 3_2
console.log("%c Level 3-2", "color: tomato; background-color: yellow");

let numArr = [5, 22, 15, 100, 55];

for (let i = 0; i < numArr.length; i++) {
  // bei 2 anfangen, da durch 0 nicht geht und durch 1 schon gegeben ist
  for (let j = 2; j < numArr[i]; j++) {
    if (numArr[i] % [j] == 0) {
      document.write(
        `${numArr[i]} is devidable by ${j}. The result is: ${
          numArr[i] / [j]
        } <br>`
      );
    } else {
      console.log("");
    }
  }
}

// - level 3_3
console.log("%c Level 3-3", "color: tomato; background-color: yellow");

// !ohne Loop:
// function loopMe() {
//   let arrayL = "L";
//   let o = Number(document.querySelector("#o").value);

//   if (o === 0) {
//     document.querySelector(".loop").innerHTML = "Bitte gib eine Zahl > 0 ein";
//   } else if (o === 1) {
//     document.querySelector(".loop").innerHTML = "Lop";
//   } else if (o % 2 === 0) {
//     document.querySelector(".loop").innerHTML = ["L" + "o".repeat(o) + "p"];
//   } else {
//     document.querySelector(".loop").innerHTML = [
//       "L" + "o0".repeat(o / 2) + "o" + "p",
//     ];
//   }
// }

// ! mit Loop:

function loopMe() {
  let o = document.querySelector("#o").value;

  for (let i = 0; i < o.length; i++) {
    if (o == 0) {
      document.querySelector(".loop").innerHTML = "Bitte gib eine Zahl > 0 ein";
    } else if (o % 2 == 0) {
      document.querySelector(".loop").innerHTML = ["L" + "o".repeat(o) + "p"];
    } else {
      document.querySelector(".loop").innerHTML = [
        "L" + "o0".repeat(o / 2) + "o" + "p",
      ];
    }
  }
}
