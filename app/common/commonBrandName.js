(function(){
    function brandNameFn(){
        return {
            template:"<a class='navbar-brand' href='#'>{{hc.brandName}}</a>",
            compile: function(element, attrs){
                return {
                    pre:function(scope,element,attrs){
                        console.log(scope);
                        console.log(element);
                        console.log(attrs);
                    },
                    post:function(scope,element,attrs){
                        console.log(scope);
                        console.log(element);
                        console.log(attrs);
                    }
                }
            }
        };
    }
    angular.module("common")
    .directive("cmBrandName",[brandNameFn])
})();