angular.module("exampleApp.Controllers", [])
.controller("dayCtrl", function($scope, days){
    var self = this;

    self.day = days.today;
})
.controller("tomorrowCtrl", function($scope, days){
    var self = this;

    self.day = days.tomorrow;

});

