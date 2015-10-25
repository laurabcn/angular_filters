angular.module("exampleApp.Services", [])
.service("days", function(nowValue){
    this.today = nowValue.getDay();
    this.tomorrow = this.today + 1;
})
.config(function(){
        console.log("Services module config: (no time)");
    })
.run(function(startTime){
        console.log("Services module run: " + startTime);
    });