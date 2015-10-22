var lyrics = function(input) {
  var output = '';
  var userInput = parseInt(input);
  if (isNaN(userInput) || userInput<0){
    return 'We need a non-negative number.';
  } else {

      for (var i=userInput; i>2 ; i--){
        output = output + i + ' bottles of beer on the wall, ' + i + ' bottles of beer. Take one down and pass it around, ' + (i-1) + ' bottles of beer on the wall.<br>';
      };
      if (userInput>1){
        output = output + '2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall.<br>';
      }

      if (userInput>0){
        output = output + '1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.<br>';
      }

    output = output + "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";
    return output;
  }
}