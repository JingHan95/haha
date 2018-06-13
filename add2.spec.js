var add = require('./example.html');
var expect = require('chai').expect;

describe('-法函数的测试', function() {
  it('2-2应该等于0', function() {
    expect(min(2, 2)).to.be.equal(0);
  });
});
