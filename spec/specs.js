describe('lyrics', function(){
  it("will not run if the input is either not a number or less than 0.", function(){
    expect(lyrics('five')).to.equal('We need a non-negative number.');
  });
});

describe('lyrics', function(){
  it("will run if the input is a string that can be converted to a number.", function(){
    expect(lyrics('5')).to.not.equal('We need a non-negative number.');
  });
});


describe('lyrics', function(){
  it("will generate the correct final line.", function(){
    expect(lyrics(3).slice(-128)).to.equal('No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.');
  });
});
describe('lyrics', function(){
  it("will generate the correct(e.g. pluralization) second to last line.", function(){
    expect(lyrics(3).slice(-250, -128)).to.equal('1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.<br>');
  });
});
describe('lyrics', function(){
  it("will generate the correct(e.g. pluralization) third to last line.", function(){
    expect(lyrics(3).slice(-367, -250)).to.equal('2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall.<br>');
  });
});

describe('lyrics', function(){
  it("will generate the lyrics, including line breaks, starting with the input value.", function(){
    expect(lyrics(3)).to.equal('3 bottles of beer on the wall, 3 bottles of beer. Take one down and pass it around, 2 bottles of beer on the wall.<br>2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall.<br>1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.<br>No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.');
  });
});
