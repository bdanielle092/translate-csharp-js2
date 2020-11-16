function main() {
  // Put your code here

  console.log("Let's roll some dice, baby!");
  console.log("--------------------");

  // have roll = randomNumber. 
  //we use Math.random to get a random number and 
  const roll = () => {
    const randomNum = Math.floor(Math.random() * 3) + 1

    return randomNum

  }
  //declearing die1 and die2 and its value to an empty array
  let die1 = {}
  let die2 = {}
  dieFace = (value) => {
    switch (value) {
      case 1:
        dieString = "\u2680";
        break;
      case 2:
        dieString = "\u2681";
        break;
      case 3:
        dieString = "\u2682";
        break;
      case 4:
        dieString = "\u2683";
        break;
      case 5:
        dieString = "\u2684";
        break;
      case 6:
        dieString = "\u2685";
        break;
    }
    return dieString;
  }

  for (let i = 0; i < 10; i++) {

    die1.value = roll();
    die2.value = roll();
    die1.icon = dieFace(die1.value);
    die2.icon = dieFace(die2.value);


    let message = `${die1.icon} + ${die2.icon} === ${die1.value + die2.value}`

    if (die1.value === die2.value) {
      message += "DOUBLES"
    }
    console.log(message)
  }

}

main();