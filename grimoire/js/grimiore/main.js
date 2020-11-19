function main() {
  // Put your code here
  console.log("Do you believe in magic?")
  console.log("------------------------")
  const allSpells = []
  const goodBook = makeGoodSpellBook(allSpells)
  const evilBook = makeEvilSpellBook(allSpells)

  function displaySpellBook(spellBook, book) {
    console.log(book.Title);
    for (spell in spell.book) {
      console.log(spell.Name);
    }
  }

}

main();