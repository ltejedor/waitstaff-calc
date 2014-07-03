angular.module('madLibsApp', [])
	.controller('madCtrl', function($scope){
		$scope.showMad = true;

		function init(){
			$scope.data = {
				myNumber: '',
				nameOne: '',
				properNoun: '',
				verbIng: '',
				adjectiveOne: '',
				nounOne: '',
				noun: '',
				nameTwo: '',
				nounThree: '',
				eventOne: '',
				adjectiveY: '',
				verbEd: '',
				adjectiveTwo: '',
				verbS: '',
				nounFour: ''
			};
		}


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

		$scope.reset = function() {
			$scope.showResult = false;
			$scope.showMad = true;
			$scope.madForm.$setPristine();
			$scope.submitted = false;
			$scope.data = init();
		};

	})