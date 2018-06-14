var fs = require("fs");
/*
// 异步读取
fs.readFile('example.html', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('example.html');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");
*/



var fs = require("fs");


// 同步读取
var data = fs.readFileSync('example.html');
//console.log("同步读取: " + data.toString());
if(data.toString != ''){
	console.log('yes');
//	console.log("异步读取: " + data.toString());

}else{
	console.log("程序执行完毕。");
}





var expect = require('chai').expect;
var n_img=(data.toString().split('img')).length-1;
var n_alt=(data.toString().split('alt')).length-1;
var n_red=(data.toString().split('color:red')).length-1;
var n_require=(data.toString().split('require')).length-1;
  
  describe('#indexOf1()', function(){
    it('if there are imgs', function(){
      expect(data.toString()).to.include('img')
    });
  });
  describe('#indexOf2()', function(){
    it('every <img> has "alt"', function(){
      expect(n_img).to.be.equal(n_alt);
    });
  });
  describe('#indexOf3()', function(){
    it('alt is not empty', function(){
      expect(data.toString()).to.not.include('alt= ""')
    });
  });
  describe('#indexOf4()', function(){
    it('Ensuring that information conveyed by color differences is also available in text', function(){
      expect(n_red).to.be.equal(n_require)
    });
  });



