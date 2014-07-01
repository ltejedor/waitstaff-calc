angular.module('madLibsApp', [])
	.controller('madCtrl', function($scope){
		$scope.guygalperson = "guy";
		$scope.male = function(){
			$scope.guygalperson = "guy";
		}
		$scope.female = function(){
			$scope.guygalperson = "gal";
		}
		$scope.nongendered = function(){
			$scope.guygalperson = "person";
		}

		$scope.submit = function() {
			if($scope.madForm.$valid) {

			} else {

			}
		};
	})