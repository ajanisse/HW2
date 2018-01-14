myApp.module1 = {

  module1Report(message) {
    console.log(myApp.mainMessage, message, `fired from Module 1`);
  },

  module1Action() {
    console.log('fired from module1 module1Action', 'Changes made to Module 1');
  }
};
