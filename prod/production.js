var myApp = {
  
  mainMessage : "Welcome to Roku Flashback",

  mainGreeting() {
    console.log('fired from main greeting');
  }
};

myApp.module1 = {

  module1Report(message) {
    console.log(myApp.mainMessage, message, `fired from Module 1`);
  },

  module1Action() {
    console.log('fired from module1 module1Action', 'Changes made to Module 1');
  }
};

myApp.module2 = {
  // add another module
  module2Action() {
    console.log('fired from module2Action from module 2', 'Changes made to Module 2');
  }
};

(() => {
  myApp.mainGreeting();

  myApp.module1.module1Report('Fired from Module 1 - module1Report');

  function myFunc() {
    var theHeading = document.querySelector('h1');

    theHeading.textContent = myApp.mainMessage;
  }


  myFunc();

})();
