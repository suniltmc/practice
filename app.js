var someName  = angular.module('appName', []);

someName.controller("ctrlName",['$scope', '$filter', 
	function($scope, $filter){
		$scope.typehere = '';
		
		$scope.lowercase = function(){
			return $filter('lowercase')($scope.typehere)
		}

		$scope.characters = 5;

		$scope.rules = [
			{ruleName : "Must be 5 characters"},
			{ruleName : "Must not be the previous used one"},
			{ruleName : "Must be something alphanumeric"}
		]
}]);
	// this can be attached to theb DOM! which is given hte controller Name

