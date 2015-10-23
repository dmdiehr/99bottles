describe('lyrics', function(){
  it("will not run if the input is not a number.", function(){
    expect(lyrics('five')).to.equal('Please enter a number between 0 and 99.');
  });
});
describe('lyrics', function(){
  it("will not run if the input is a negative number.", function(){
    expect(lyrics(-5)).to.equal('Please enter a number between 0 and 99.');
  });
});
describe('lyrics', function(){
  it("will not run if the input is number greater than 99.", function(){
    expect(lyrics(100)).to.equal('Please enter a number between 0 and 99.');
  });
});

describe('lyrics', function(){
  it("will run if the input is a string that can be converted to a number.", function(){
    expect(lyrics('5')).to.not.equal('We need a number between 0 and 99.');
  });
});


describe('lyrics', function(){
  it("will generate the correct final line.", function(){
    expect(lyrics(5).slice(-137)).to.equal('<li>No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.</li>');
  });
});
describe('lyrics', function(){
  it("will generate the correct(e.g. pluralization) second to last line.", function(){
    expect(lyrics(5).slice(-264, -137)).to.equal('<li>1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.</li>');
  });
});
describe('lyrics', function(){
  it("will generate the correct(e.g. pluralization) third to last line.", function(){
    expect(lyrics(5).slice(-386, -264)).to.equal('<li>2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall.</li>');
  });
});

describe('lyrics', function(){
  it("will generate the lyrics, including line breaks, starting with the input value.", function(){
    expect(lyrics(3)).to.equal('<li>3 bottles of beer on the wall, 3 bottles of beer. Take one down and pass it around, 2 bottles of beer on the wall.</li><li>2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall.</li><li>1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.</li><li>No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.</li>');
  });
});
