function main() {
  // Put your code here
  console.log("Let's roll some dice, baby!");
  console.log("--------------------");

  const roll = () => {
    const randomNum = Math.floor(Math.random() * 6) + 1

    return {
      value: randomNum
    }
  }

  for (let i = 0; i < 10; i++) {

    const die1 = roll();
    const die2 = roll()

    let message = `? + ? = ${die1.value + die2.value}`

    if (die1.value === die2.value) {
      message += "DOUBLES"
    }
  }

}

main();