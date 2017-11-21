(function () {
  var formComponent = {
    controller: "FormController",
    template: `
    <input type="text" placeholder="Animal" ng-model="$ctrl.addInfo.animal">
    <input type="text" placeholder="Color" ng-model="$ctrl.addInfo.color">
    <input type="text" placeholder="Age" ng-model="$ctrl.addInfo.age">
    <input type="text" placeholder="Favorite Food" ng-model="$ctrl.addInfo.favoritefood">
    <button type="button" ng-click="$ctrl.addInfo($ctrl.addInfo)">Read Story</button>
    `
  };

  angular
  .module("storyApp")
  .component("formComponent", formComponent);
})();
