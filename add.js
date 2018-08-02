/*
function add(x, y) {
  return x + y;
}
module.exports = add;
*/
/**
 * 
 */

window.onload=function a(pass,fail)()
{




// passing or failing--------------------------------------------------------------------------
  var pass=0;
  var fail=0;



//img.alt--------------------------------------------------------------------------
	
  var imgs = document.getElementsByTagName('img');
  var i1=1;
  for(var i=0;i<imgs.length;i++){
    if(imgs[i].src==imgs[i1].src){
      if(imgs[i1].alt!=""){
        console.log(imgs[i1]);
        console.error('break "G196: Using a text alternative on one item within a group of images"');
        i1++;
        fail++;
      }else{
        pass++;
      }
      
    }else{
      if(imgs[i].alt==""){

      console.log(imgs[i]);
//      document.write(imgs[i]);
 //     document.write('imgs[i].innerText');
      console.error('break"H37: Using alt attributes on img elements"',imgs[i].id,imgs[i].src);
//      document.write('no alt:',imgs[i].id,imgs[i].src);
      fail++;
 

      }else{
        pass++;
      }
    }
  }




    console.log(pass,'passing');
    console.log(fail,'failing');

}


 
