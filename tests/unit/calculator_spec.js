var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('it can add starting from a positive number', function(){
    calculator.add(2)
    assert.equal(2, calculator.runningTotal)
  });

  it('it can add starting from a negative number', function(){
    calculator.previousTotal = -4
    calculator.add(6)
    assert.equal(2, calculator.runningTotal)
  });

  it('it can subtract from a positive number', function(){
    calculator.previousTotal = 10
    calculator.subtract(4)
    assert.equal(6, calculator.runningTotal)
  });

  it('it can subtract from a negative number', function(){
    calculator.previousTotal = -10
    calculator.subtract(4)
    assert.equal(-14, calculator.runningTotal)
  });

  it('it can multiply from a positive number', function(){
    calculator.previousTotal = 5
    calculator.multiply(4)
    assert.equal(20, calculator.runningTotal)
  });

  it('it can multiply from a negative number', function(){
    calculator.previousTotal = -10
    calculator.multiply(4)
    assert.equal(-40, calculator.runningTotal)
  });

  it('it can divide from a positive number', function(){
    calculator.previousTotal = 9
    calculator.divide(3)
    assert.equal(3, calculator.runningTotal)
  });

  it('it can divide from a negative number', function(){
    calculator.previousTotal = -9
    calculator.divide(3)
    assert.equal(-3, calculator.runningTotal)
  });

  it('it can divide a number into a float', function(){
    calculator.previousTotal = 9
    calculator.divide(2)
    assert.equal(4.5, calculator.runningTotal)
  });

  it('it can use operatorClick and numberClick to add two numbers', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(3, calculator.runningTotal)
  });

  it('it can use operatorClick and numberClick to add more than two numbers', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(6, calculator.runningTotal)
  });

  it('it can use operatorClick and numberClick to subtract two numbers', function(){
    calculator.numberClick(5)
    calculator.operatorClick('-')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.equal(-2, calculator.runningTotal)
  });

  it('it can use operatorClick and numberClick to subtract more than two numbers', function(){
    calculator.numberClick(10)
    calculator.operatorClick('-')
    calculator.numberClick(2)
    calculator.operatorClick('-')
    calculator.numberClick(1)
    calculator.operatorClick('=')
    assert.equal(7, calculator.runningTotal)
  });

  it('it can use operatorClick and numberClick to multiply two numbers', function(){
    calculator.numberClick(4)
    calculator.operatorClick('*')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(12, calculator.runningTotal)
  });

  it('it can use operatorClick and numberClick to multiply more than two numbers', function(){
    calculator.numberClick(1)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(6, calculator.runningTotal)
  });

  it('it can use operatorClick and numberClick to divide two numbers', function(){
    calculator.numberClick(8)
    calculator.operatorClick('/')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(4, calculator.runningTotal)
  });

  it('it can use operatorClick and numberClick to divide more than two numbers', function(){
    calculator.numberClick(40)
    calculator.operatorClick('/')
    calculator.numberClick(10)
    calculator.operatorClick('/')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(2, calculator.runningTotal)
  });

  it('can concatenate multiple number button clicks', function(){
    calculator.numberClick(2);
    calculator.numberClick(5);
    calculator.numberClick(0);
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(7);
    calculator.numberClick(3);
    calculator.numberClick(0);
    calculator.operatorClick('=');
    assert.equal(3231, calculator.runningTotal);
  })

  it('can chain multiple operations together', function(){
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick('-');
    calculator.numberClick(11);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(18, calculator.runningTotal);
  })

  it('can clear the running total', function(){
    calculator.numberClick(2);
    calculator.numberClick(4);
    calculator.operatorClick('/');
    calculator.numberClick(4);
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })

});
