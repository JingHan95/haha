var add = require('./add.js');
var expect = require('chai').expect;

describe('加法函数的测试', function() {
  it('2加2应该等于4', function() {
    expect(add(2, 2)).to.be.equal(4);
  });
});
