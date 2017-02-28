(function(){
    function cmHeaderFn(){
        return{
            templateUrl: "app/header/header.tpl.html",
            restrict: "A,C"
        }
    }
    
    angular.module("common")
    .directive("cmHeader",[cmHeaderFn]);
})();