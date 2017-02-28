(function(){
    function productsSvcfn($q,$http){
        this.getProducts = function(){
            var dfd = $q.defer();
            $http.get("api/products.json")
            .then(function(res){
                dfd.resolve(res);
            })
            .catch(function(err){
                dfd.reject(err);
            })
            return dfd.promise;
        }
    }
    angular.module("products")
    .service("productsSvc",["$q","$http",productsSvcfn])
})();