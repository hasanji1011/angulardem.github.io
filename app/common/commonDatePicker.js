(function(){
    function cmDatePickerFn(){
        return {
            restrict:"A",
            link: function(scope, element, attrs){
                console.log(scope);
                console.log(element);
                console.log(attrs);
                var options={};
                options.minDate = attrs["mindate"];
                options.maxDate= attrs["maxdate"];
                element.datepicker(options);
            }
        }
    }
    
    angular.module("common")
    .directive("cmDatePicker",[cmDatePickerFn]);
})();