(function(){
    function headerCtrlFn(){
        var vm = this;
        vm.brandName ="Hasan Store";
        vm.navItems = ["Login","Register","Products","Cart"];
        vm.loginTemplate = "app/login/login.tpl.html";
        vm.registerTemplate = "app/register/register.tpl.html";
        vm.productsTemplate = "app/products/products.tpl.html";
        
        vm.loadView = function(param){
            if(param == "Login"){
                vm.loadTemplate=vm.loginTemplate;
            } else if(param == "Register"){
                vm.loadTemplate = vm.registerTemplate;
            }
            else if(param == "Products"){
                vm.loadTemplate = vm.productsTemplate;
            }
        };
    }
    
    angular.module("header")
    .controller("headerCtrl", [headerCtrlFn]);
})();