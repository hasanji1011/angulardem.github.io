(function(){
    //console.log("enter cmnumberonly")
    function cmNumberOnlyFn(){
        return { 
            restrict:"A",
            link: function(scope,element,attrs){
                
                var maxLength = attrs["maxnumber"];
                element.bind("keypress",function(e){
                    if(e.keyCode>=48 && e.keyCode<=57 &&  this.value.length < maxLength){}
                    else{
                        e.preventDefault();
                    }
                })
            }
        }
    }
    
    angular.module("common")
    .directive("cmNumberOnly",[cmNumberOnlyFn])
})();