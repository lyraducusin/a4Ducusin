(function() {

  function FormController(StoryService) {
    var vm = this;
    vm.addInfo = function(newInfo) {
      StoryService.setWords(newInfo);
    };
  }

  function StoryController(StoryService) {
    var vm = this;
    vm.addInfo = StoryService.getWords();

  }

  angular
  .module("storyApp")
  .controller("StoryController", StoryController)
  .controller("FormController", FormController);

})();
