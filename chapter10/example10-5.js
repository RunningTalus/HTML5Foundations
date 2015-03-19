window.onload = function() {
  sayHello('Joe');
  sayHello('Beth');
  sayHello('Steve');
  sayHello('James');
};

//Print out a hello message
function sayHello(name) {
  document.write('Hello ' + name + '<br>');
};