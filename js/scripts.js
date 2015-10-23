var lyrics = function(input) {
  var output = '';
  var userInput = parseInt(input);
  if (isNaN(userInput) || userInput<0 || userInput>99) {
    return 'Please enter a number between 0 and 99.';
  } else {

      for (var i=userInput; i>2 ; i--){
        output = output +'<li>' + i + ' bottles of beer on the wall, ' + i + ' bottles of beer. Take one down and pass it around, ' + (i-1) + ' bottles of beer on the wall.</li>';
      };
      if (userInput>1){
        output = output + '<li>2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall.</li>';
      }

      if (userInput>0){
        output = output + '<li>1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.</li>';
      }

    output = output + "<li>No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.</li>";
    return output;
  }
}

$(document).ready(function(){
  $('#start-button').click(function(){
    var input = $('#input').val();
    $('#lyrics ul').html(lyrics(input));
    $('#start').slideUp(2000);



  });//end button click function
}); //end document.ready 

/////////////////////////////Attempt at Refactoring lyrics() ////////////////////////////////

// var lyrics = function(input) {
//   String.prototype.insertTextAtIndices = function(text) {
//     return this.replace(/./g, function(character, index) {
//         return text[index] ? text[index] + character : character;
//     });
//   };
//   var output = '';
//   var userInput = parseInt(input);
//   var line = "of beer on the wall, of beer. Take one down and pass it around, of beer on the wall.<br>"
//   var insert1 = '';
//   var insert2 = '';
//   var inserts={};
//   if (isNaN(userInput) || userInput<0){
//     return 'We need a non-negative number.';
//   } else {
//       for (var i=userInput; i>0 ; i--){
//         if (i>2){
//           insert1 = i + ' bottles ';
//           insert2 = (i-1) + ' bottles ';
//         }
//         if (i===2){
//           insert1 = '2 bottles ';
//           insert2 = '1 bottle ';
//         }
//         if (i===1){
//           insert1 = '1 bottle ';
//           insert2 = 'no more bottles ';
//         }
//         inserts = {
//                   0: insert1,
//                   21: insert1,
//                   64: insert2
//                 };
//                 output = output + line.insertTextAtIndices(inserts);
//               }
//      output = output + "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";
//      return output;
//   }
// }


//In the end, the refactoring made the function more complicated.  It was an interesting exercise and may have been useful if there had been more than two extra permutations of the pluralization. I'm going to keep it here for posterity.

// Note, after writing this function, I decided to change the output of lyrics to have each individual line of the lyric be represented by an <li>. This function will only pass the older tests that test for output with <br> tags (designed to be inserted into a single set of <p> tags.)