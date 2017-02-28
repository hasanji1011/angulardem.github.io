(function(){
    
    function countryProviderFn($q,$http){
        var countries = [
          {"code":"IN","name":"India"},
            {"code":"USA","name":"United States of America"},
            {"code":"UK","name":"United Kingdom"}
        ];
        this.getCountries = function(){
            //return countries;
            var def = $q.defer();
            
            if(countries.length > 0){
                def.resolve(countries);
            }
            else{
                def.reject("There is no countries fetched");
            }
            
            return def.promise;
        };
        
        this.defaultCountry = function(){
            var def = $q.defer();
            
            $http.get('api/countries.json')
            .then(function(res){
                angular.forEach(res.data.countries, function(item){
                    if(item.code == 'IN'){
                        def.resolve(item);
                    }
                });
            })
            .catch(function(error){
                dfd.reject("error in json");
            })
            
//            var country='';
//            angular.forEach(countries, function(item){
//                if(item.code == 'IN'){
//                    def.resolve(item);
//                }
//                else{
//                    def.reject("default country error");
//                }
//            });
            return def.promise;
        };
        
        this.getCountriesFromJson = function(){
          var dfd = $q.defer();
            
            $http.get('api/countries.json')
            .then(function(res){
                dfd.resolve(res.data.countries);
            })
            .catch(function(error){
                dfd.reject("error in json");
            })
            
            return dfd.promise;
        };
    }
    
    angular.module("common")
    .service("countryProvider",["$q","$http",countryProviderFn]);
})();