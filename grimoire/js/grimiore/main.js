function main() {
  // Put your code here

  const allSpells = [
    {
      Name: "Turn enemy into a newt",
      IsEvil: true,
      EnergyRequired: 5.1
    },
    {
      Name: "Conjure some gold for a local charity",
      IsEvil: false,
      EnergyRequired: 2.99
    },
    {
      Name: "Give a deaf person the ability to heal",
      IsEvil: false,
      EnergyRequire: 12.2
    },
    {
      Name: "Make yourself emperor of the universe",
      IsEvil: true,
      EnergyRequired: 100.0
    },
    {
      Name: "Convince your relatives your political views are correct",
      IsEvil: false,
      EnergyRequired: 2921.5
    }

  ]

  const makeGoodSpellBook = () => {
    return allSpells
  }

  const makeEvilSpellBook = () => {
    return allSpells
  }



  console.log("Do you believe in magic?")
  console.log("------------------------")
  const goodBook = makeGoodSpellBook(allSpells)
  const evilBook = makeEvilSpellBook(allSpells)
  const spells = goodBook.push('Conjure some gold for a local charity')
  console.log(goodBook);


}

main();