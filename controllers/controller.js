myApp.controller("dayCtrl", function($scope){
    var self = this,
        dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    self.day = dayNames[new Date().getDay()];
});

myApp.controller("tomorrowCtrl", function($scope){
    var self = this,
        dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    self.tomorrow = dayNames[(new Date().getDay() + 1) % 7];

});

myApp.directive("highlight", function($filter){
    var dayFilter = $filter("dayName");
    return function(scope, element, attrs){
        if(dayFilter(scope.dayC.day) == attrs["highlight"]){
            element.css("color", "red");
        }
    }
});

myApp.filter("dayName", function(){
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return function (input) {
        return angular.isNumber(input) ? dayNames[input] : input;
    }

});