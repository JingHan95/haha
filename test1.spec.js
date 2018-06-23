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

var str = “aaabbbcccaaabbbccc”;   
　　var regExp = /aaa/; //未使用g选项   
　　var res = regExp .exec(str);    
　　console.log(res); //输出[ 'aaa', index: 0, input: 'aaabbbcccaaabbbccc' ]   
　　示例2：   
　　var str = “aaabbbcccaaabbbccc”;   
　　var regExp = /aaa/g; //使用g选项   
　　var res = regExp .exec(str);    
　　console.log(res); //输出[ 'aaa', index: 0, input: 'aaabbbcccaaabbbccc' ]   
　　示例3：   
　　var str = “aaabbbccc1234aaabbbccc”;   
　　var regExp = /ccc([0-9]+)aaa/;   
　　var res = regExp .exec(str);    
　　console.log(res); //输出[ 'ccc1234aaa', '1234', index: 6, input: 'aaabbbccc1234aaabbbccc' ] 第一个表示整个正则表达式所匹配的内容；第二个表示()内容的子表达式所匹配的内容；第三个和第四个同上   
　　示例4：   
　　var str = “aaabbbccc1234aaabbbcccaaabbbccc5678aaabbbccc”;   
　　var reg = /ccc([0-9]+)aaa/;   
　　var res = reg.exec(str);   
　　console.log(res); //输出同示例三，因为exec只返回第一个匹配的字符串，如果想全部返回，则需要借助while循环和g参数来实现，如下   
　　var str = “aaabbbccc1234aaabbbcccaaabbbccc5678aaabbbccc”;   
　　var reg = /ccc([0-9]+)aaa/g;   
　　while(res = reg.exec(str)){   
　　  console.log(res);   
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
    it('every <img> has "alt"', function(){
      expect(n_img).to.be.equal(n_alt);
    });
    it('alt is not empty', function(){
      expect(data.toString()).to.not.include('alt= ""')
    });

  });



