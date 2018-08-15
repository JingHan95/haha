/*
var fs = require("fs");

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
var n_lang=(data.toString().split('<html lang')).length-1;
var n_title=(data.toString().split('<title></title>')).length-1;
var n_table=(data.toString().split('<table')).length-1;
var n_summary=(data.toString().split('summary="')).length-1;
var n_arialabel=(data.toString().split('aria-label=""')).length-1;


var n_role=(data.toString().split('role=""')).length-1;
var n_ariaactivedescendant=(data.toString().split('aria-activedescendant=""')).length-1;
var n_ariaatomic=(data.toString().split('aria-atomic=""')).length-1;
var n_ariaautocomplete=(data.toString().split('aria-autocomplete=""')).length-1;
var n_ariabusy=(data.toString().split('aria-busy=""')).length-1;
var n_ariacontrols=(data.toString().split('aria-controls=""')).length-1;
var n_ariadescribedby=(data.toString().split('aria-describedby=""')).length-1;


  describe('#indexOf1()', function(){

    it('every <img> has "alt"', function(){
      expect(n_img).to.be.equal(n_alt);
    });
    it('"H37: Using alt attributes on img elements"', function(){
      expect(data.toString()).to.not.include('alt=""')
      expect(data.toString()).to.not.include('alt= ""')
      expect(data.toString()).to.not.include('alt = ""')
    });
    it('"G14: Ensuring that information conveyed by color differences is also available in text"', function(){
      expect(n_red).to.be.equal(n_require)
    });
    it('"H57: Using language attributes on the html element"', function(){
      expect(n_lang).to.be.equal(1)
      expect(data.toString()).to.not.include('lang=""')
      expect(data.toString()).to.not.include('lang= ""')
      expect(data.toString()).to.not.include('lang = ""')
    });
    it('"G88: Providing descriptive titles for Web pages"', function(){
      expect(n_title).to.be.equal(0)
    });
    it('"H25: Providing a title using the title element"', function(){
      expect(n_title).to.be.equal(0)
    });
    it('"H73: Using the summary attribute of the table element to give an overview of data tables"', function(){
      expect(n_table).to.be.equal(n_summary)
    });
    it('"aria-label have values"', function(){
      expect(n_arialabel).to.be.equal(0)
    });


    it('"n_role have values"', function(){
      expect(n_role).to.be.equal(0)
    });
    it('"aria-activedescendant have values"', function(){
      expect(n_ariaactivedescendant).to.be.equal(0)
    });
    it('"aria-atomic have values"', function(){
      expect(n_ariaatomic).to.be.equal(0)
    });
    it('"aria-autocomplete have values"', function(){
      expect(n_ariaautocomplete).to.be.equal(0)
    });
    it('"aria-busy have values"', function(){
      expect(n_ariabusy).to.be.equal(0)
    });
    it('"aria-controls have values"', function(){
      expect(n_ariacontrols).to.be.equal(0)
    });
    it('"aria-describedby have values"', function(){
      expect(n_ariadescribedby).to.be.equal(0)
    });
  });




  var n_red=(data.toString().split('color:red')).length-1;
  var n_require=(data.toString().split('require')).length-1;
  
