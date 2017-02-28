(function(){
    
    function registerCtrlFn(lookupSvc){
        var vm = this;
        vm.user={
            chkbtn:false
        };
//        lookupSvc.getCountries()
//        .then(function(response){
//            vm.country = response;
//        })
//        .catch(function(response){
//            console.log("error in countries")
//        })
//        vm.register = function(){
//            console.log(vm.user)
//        }
        //console.log(lookupSvc.defaultCountry());
        
        lookupSvc.getCountriesFromJson()
        .then(function(res){
            vm.country = res;
        })
        .catch(function(res){
            console.log(res)
            console.log("error in countries")
        })
        vm.register = function(){
            console.log(vm.user)
        }
       lookupSvc.defaultCountry()
       .then(function(res){
           console.log(res);
           vm.user.country = res;
       })
       .catch(function(){
           console.log("error in default country")
       })
    }
    
    angular.module("header").
    controller("registerCtrl", ["countryProvider",registerCtrlFn]);
})();