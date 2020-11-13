function main() {
  // Put your code here
  console.log("All Place Names");
  var names = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"];
  for (let name of names) {
    console.log(name)
  }

  console.log("----------");
  console.log("'The' Place Names");
  var theNames = names
  for (name of theNames) {
    if (name.startsWith("The") === true)
      console.log(name)
  }

}
main();