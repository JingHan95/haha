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


var fs = require('fs');
var cheerio = require('./cheerio');

var myHtml = fs.readFileSync("example.html");
var $ = cheerio.load(myHtml);
var t = $('html').find('img');
var t2 = t.nextAll();

t2.each(function(i, elem) {
    getContent($(this));
    console.log($(this).text());
});






/*

var str = data.toString();   
　　var regExp = /img/; //未使用g选项   
　　var res = regExp.exec(str);    
　　console.log(res); //输出[ 'aaa', index: 0, input: 'aaabbbcccaaabbbccc' ]   


*/







var expect = require('chai').expect;
var n_img=(data.toString().split('img')).length-1;
var n_alt=(data.toString().split('alt')).length-1;
var n_red=(data.toString().split('color:red')).length-1;
var n_require=(data.toString().split('require')).length-1;
  

  describe('#indexOf1()', function(){
    it('if there are imgs', function(){
      expect(data.toString()).to.include('img')
    });
    it('every <img> has "alt"', function(){
      expect(n_img).to.be.equal(n_alt);
    });
    it('alt is not empty', function(){
      expect(data.toString()).to.not.include('alt= ""')
    });

  });



