/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue(hand) {
  console.log(hand);
  var handTotal = 0;
  var aceCount = 0;

  for (i = 0; i < hand.length; i++) {
    if (hand[i] === "A") {
      handTotal = handTotal + 11;
      aceCount++;
    } else if (["J", "Q", "K"].indexOf(hand[i]) != -1) {
      handTotal = handTotal + 10;
    } else {
      handTotal = handTotal + parseInt(hand[i]);
    }
    if (handTotal > 21 && aceCount > 0) {
      handTotal = handTotal - 10;
      aceCount--;
    } else if (handTotal > 21 && aceCount <= 0) {
      console.log("You have " + handTotal + ". BUST!!!");
    }
  }
  console.log("handTotal: ", handTotal);
  return handTotal;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
