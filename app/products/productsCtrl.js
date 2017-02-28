(function(){
    
    function productsCtrlFn(productsSvc){
        var vm = this;
        productsSvc.getProducts()
        .then(function(res){
            console.log(res.data.products);
            vm.products = res.data.products;
        })
        .catch(function(err){
            console.log(err);
        })
    }
    angular.module("products")
    .controller("productsCtrl",["productsSvc",productsCtrlFn]);
})();