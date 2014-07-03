angular.module('madLibsApp', [])
	.controller('madCtrl', function($scope){
		$scope.showMad = true;
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
				$scope.showResult = true;
				$scope.showMad = false;
			};
		};
	})