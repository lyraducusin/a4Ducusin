(function () {
  var storyComponent = {
    controller: "StoryController",
    template: `
    <p>I have a  {{$ctrl.addInfo.animal}}. His color is {{$ctrl.addInfo.color}}. He is {{$ctrl.addInfo.age}} years old. His favorite food is {{$ctrl.addInfo.favoritefood}}. He is a friendly, cuddly, and sweet type of animal.</p>
    <a href="#!/form"><button type="button">Restart Story</button></a>
    `
  };

  angular
  .module("storyApp")
  .component("storyComponent", storyComponent);
})();
