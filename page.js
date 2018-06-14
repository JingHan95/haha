var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
  console.log('Page title is ' + msg);
};

page.open('file:///C:/Users/Administrator/Desktop/test2/example.html', function(status) {
  page.evaluate(function() {
    console.log(document.title);
  });
  phantom.exit();
});