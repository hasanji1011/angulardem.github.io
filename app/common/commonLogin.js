(function(){
    
    function cmLoginFn(){
        return{
            restrict:"A,E",
            templateUrl:"app/login/login.tpl.html",
            controller:"loginCtrl as lc"
        }
    }
    
    angular.module("common")
    .directive("cmLogin",[cmLoginFn]);
})();