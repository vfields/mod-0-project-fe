/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 2;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.

If the following condition, which states: the value assigned to the variable named doorChoice is
stricly equal to 1, is true, then run the following code block, which states: the value assigned to
the variable bearClothing is the string "hat".

Otherwise, run the following code block: the value assigned to the variable bearClothing is
the string "scarf"

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

"scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

If the following condition, which states: the value assigned to the variable named bearChoice is
strictly equal to 1, is true, then run the following code block, which states: log to the console the
concatenation that joins the string, "You offer the bear your ", and the value assigned to the variable
bearClothing, and the string "and the bear shows you a secret passage out!".

If the first condition is false, evaluate a second condition, which states: the value assigned to the variable
named bearChoice is strictly equal to 2. If that condition is true, then run the following code block, which states:
log to the console the concatenation that joins the string, "You tell the bear the ", and the value assigned
to the variable bearClothing, and the string " is too small and it starts to cry!".

If the first and second conditions are false, evaluate a third condition, which states: the value assigned
to the variable named bearChoice is strictly equal to 3. If that condition is true, then run the following
code block, which states: log to the console the following string, "You run as fast as you can into the next
room. It's full of snakes!"

Otherwise, if the first, second, and third conditions are false, then run the following block of code, which
states: log to the console the following string, "You stay with the bear and become it's best friend!".

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

"You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

Being best friends with the bear :)

*/
