
////////////////////Utility Functions////////////////////////////////////////////

function rangeWrap(bottomRange, topRange, input, change) {
  
  var baseRange = topRange-bottomRange;
  var rangePosition = input-bottomRange;

  return (((rangePosition)+change+baseRange)%baseRange)+bottomRange;
};// rangeWrap

function random(range) {
  return Math.floor(Math.random()*range);
}// random(range) function

///////////////////////////////////////////////////////////////////////////////////////



function randomGradient(){

  var randomGradientObject = {};
  randomGradientObject.randomArray = [];

    for (var i=0; i<23; i++) {
      randomGradientObject.randomArray[i] = random(3)-1;
      };

  var firstGradient;
    if (random(2)===1) {
        firstGradient = 'linear-gradient';
      } else {
          firstGradient = 'radial-gradient';
      }

  var secondGradient;
    if (random(2)===1) {
        secondGradient = 'linear-gradient';
      } else {
          secondGradient = 'radial-gradient';
      }

  var gradient1Circle;
    if (random(2)===1) {
      gradient1Circle = 'circle ';
    } else {
        gradient1Circle = '';
    }
  var gradient2Circle;
    if (random(2)===1) {
      gradient2Circle = 'circle ';
    } else {
        gradient2Circle = '';
    }

  randomGradientObject.firstGradient = firstGradient;
  randomGradientObject.secondGradient = secondGradient;
  randomGradientObject.gradient1Circle = gradient1Circle;
  randomGradientObject.gradient2Circle = gradient2Circle;
  randomGradientObject.transparentPercent = random(40) + 30;
  randomGradientObject.gradient1Deg = random(180);
  randomGradientObject.gradient2Deg = random(180) + 180;
  randomGradientObject.gradient1HorizontalPercent = random(50);
  randomGradientObject.gradient2HorizontalPercent = random(50)+50;
  randomGradientObject.gradient1VerticalPercent = random(100);
  randomGradientObject.gradient2VerticalPercent = random(100);
  randomGradientObject.gradient1Color1Red = random(256);
  randomGradientObject.gradient1Color1Green = random(256);
  randomGradientObject.gradient1Color1Blue = random(256);
  randomGradientObject.gradient1Color2Red = random(256);
  randomGradientObject.gradient1Color2Green = random(256);
  randomGradientObject.gradient1Color2Blue = random(256);
  randomGradientObject.gradient2Color1Red = random(256);
  randomGradientObject.gradient2Color1Green = random(256);
  randomGradientObject.gradient2Color1Blue = random(256);
  randomGradientObject.gradient2Color2Red = random(256);
  randomGradientObject.gradient2Color2Green = random(256);
  randomGradientObject.gradient2Color2Blue = random(256);
  randomGradientObject.gradient1FirstStop = random(10);
  // randomGradientObject.gradient1SecondStop = 10 + random(randomGradientObject.transparentPercent-10-randomGradientObject.gradient1FirstStop);
  // vvvv tweak vvvv
  randomGradientObject.gradient1SecondStop = randomGradientObject.transparentPercent - (10 + random(10));
  randomGradientObject.gradient2FirstStop = random(10);
  randomGradientObject.gradient2SecondStop = 80 - random(60-randomGradientObject.gradient2FirstStop);

  return randomGradientObject;

}// randomGradient function

var inputObj = randomGradient();

function gradientMutator(obj) {

  var firstIntro;
  var secondIntro;
  var gradientString;

  //compose gradientString
    if (obj.firstGradient === 'linear-gradient') {
      firstIntro = 'linear-gradient('+obj.gradient1Deg+'deg, ';
    } else {
        firstIntro = 'radial-gradient(' + obj.gradient1Circle + 'at ' + obj.gradient1HorizontalPercent + '% ' + obj.gradient1VerticalPercent + '%, '; 
      }
    if (obj.secondGradient === 'linear-gradient') {
      secondIntro = 'linear-gradient('+obj.gradient2Deg+'deg, ';
    } else {
        secondIntro = 'radial-gradient(' + obj.gradient2Circle + 'at ' + obj.gradient2HorizontalPercent + '% ' + obj.gradient2VerticalPercent + '%, '; 
      }

    gradientString = firstIntro + 'rgb(' + obj.gradient1Color1Red + ', ' + obj.gradient1Color1Blue + ', ' + obj.gradient1Color1Green + ') ' + obj.gradient1FirstStop + '%, rgb(' + obj.gradient1Color2Red + ', ' + obj.gradient1Color2Blue + ', ' + obj.gradient1Color2Green + ') ' + obj.gradient1SecondStop + '%, transparent ' + obj.transparentPercent + '%), ' + secondIntro + 'rgb(' + obj.gradient2Color1Red + ', ' + obj.gradient2Color1Blue + ', ' + obj.gradient2Color1Green + ') ' + obj.gradient2FirstStop + '%, rgb(' + obj.gradient2Color2Red + ', ' + obj.gradient2Color2Blue + ', ' + obj.gradient2Color2Green + ') ' + obj.gradient2SecondStop + '%)';


  $('body').css('background-image', gradientString);
  console.log(gradientString);



//mutate inputObj
    inputObj.transparentPercent = rangeWrap(30, 70, inputObj.transparentPercent, inputObj.randomArray[0]);
    inputObj.gradient1Deg = rangeWrap(0, 180, inputObj.gradient1Deg, inputObj.randomArray[1]);
    inputObj.gradient2Deg = rangeWrap(180, 360, inputObj.gradient2Deg, inputObj.randomArray[2]);
    inputObj.gradient1HorizontalPercent = rangeWrap(0, 50, inputObj.gradient1HorizontalPercent, inputObj.randomArray[3]);
    inputObj.gradient2HorizontalPercent = rangeWrap(50, 100, inputObj.gradient2HorizontalPercent, inputObj.randomArray[4]);
    inputObj.gradient1VerticalPercent = rangeWrap(0, 100, inputObj.gradient1VerticalPercent, inputObj.randomArray[5]);
    inputObj.gradient2VerticalPercent = rangeWrap(0, 100, inputObj.gradient2VerticalPercent, inputObj.randomArray[6]);
    inputObj.gradient1Color1Red = rangeWrap(0, 255, inputObj.gradient1Color1Red, inputObj.randomArray[7]);
    inputObj.gradient1Color1Green = rangeWrap(0, 255, inputObj.gradient1Color1Green, inputObj.randomArray[8]);
    inputObj.gradient1Color1Blue = rangeWrap(0, 255, inputObj.gradient1Color1Blue, inputObj.randomArray[9]);
    inputObj.gradient1Color2Red = rangeWrap(0, 255, inputObj.gradient1Color2Red, inputObj.randomArray[10]);
    inputObj.gradient1Color2Green = rangeWrap(0, 255, inputObj.gradient1Color2Green, inputObj.randomArray[11]);
    inputObj.gradient1Color2Blue = rangeWrap(0, 255, inputObj.gradient1Color2Blue, inputObj.randomArray[12]);
    inputObj.gradient2Color1Red = rangeWrap(0, 255, inputObj.gradient2Color1Red, inputObj.randomArray[13]);
    inputObj.gradient2Color1Green = rangeWrap(0, 255, inputObj.gradient2Color1Green, inputObj.randomArray[14]);
    inputObj.gradient2Color1Blue = rangeWrap(0, 255, inputObj.gradient2Color1Blue, inputObj.randomArray[15]);
    inputObj.gradient2Color2Red = rangeWrap(0, 255, inputObj.gradient2Color2Red, inputObj.randomArray[16]);
    inputObj.gradient2Color2Green = rangeWrap(0, 255, inputObj.gradient2Color2Green, inputObj.randomArray[17]);
    inputObj.gradient2Color2Blue = rangeWrap(0, 255, inputObj.gradient2Color2Blue, inputObj.randomArray[18]);
    inputObj.gradient1FirstStop = rangeWrap(0, 10, inputObj.gradient1FirstStop, inputObj.randomArray[19]);

    // inputObj.gradient1SecondStop = rangeWrap(10, 50, inputObj.gradient1SecondStop, inputObj.randomArray[20]); vvv tweak vvv
    inputObj.gradient1SecondStop = inputObj.transparentPercent - (10 + random(10));

    inputObj.gradient2FirstStop = rangeWrap(0, 10, inputObj.gradient2FirstStop, inputObj.randomArray[21]);
    inputObj.gradient2SecondStop = rangeWrap(20, 80, inputObj.gradient2SecondStop, inputObj.randomArray[22]);



}// gradientMutator

$(document).ready(function(){

// inputObj = randomGradient();

  $('#mutate').on('click', function(){

    // inputObj = randomGradient();
    gradientMutator(inputObj);
  });


});//end document.ready