(function(){
    function loginCtrlFn(countryProvider){
        var vm = this;
        vm.user={};
//        vm.user.country = countryProvider.getCountries();
//        vm.user.country = countryProvider.defaultCountry();
//        countryProvider.getCountries()
//        .then(function(res){
//            vm.country = res;
//        })
//        .catch(function(err){
//            console.log("error");
//        })
//        countryProvider.defaultCountry()
//        .then(function(res){
//            vm.user.country = res;
//        })
//        .catch(function(res){
//            console.log("default country error");
//        })
        countryProvider.getCountriesFromJson()
        .then(function(res){
            vm.country = res;
        })
        .catch(function(err){
            console.log("error in login ctrl country")
        })
    }
    angular.module("login")
    .controller("loginCtrl", ["countryProvider",loginCtrlFn]);
    
})();