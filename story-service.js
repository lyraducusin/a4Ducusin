(function() {
  function StoryService($location) {
    var newInfo = {};

    return {
      setWords: setWords,
      getWords: getWords
    };

    function setWords(addInfo) {
      newInfo = addInfo;
      $location.path("/story");
    }

    function getWords() {
      return newInfo;
    }
  }


  angular
  .module("storyApp")
  .factory("StoryService", StoryService);
})();
