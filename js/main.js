(() => {
  myApp.mainGreeting();

  myApp.module1.saySomething('Fired from saySomething');

  function myFunc() {
    var theHeading = document.querySelector('h1');

    theHeading.textContent = myApp.mainMessage;
  }
  myFunc();

})();
