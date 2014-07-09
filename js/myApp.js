angular.module('waitCalcApp', [])
	.controller('calcCtrl', function($scope){
		$scope.tip_total = 0;
		$scope.meal_count = 0;
		$scope.tip_average = 0;

		function init(){
			$scope.submitted = false;
			$scope.detailsForm.$setPristine();
			$scope.data = {
				mealTotal: '',
				taxRate: '',
				tipPerc: ''
			};
		}

		function customerCharge(){
			$scope.subtotal = $scope.data.meal + ($scope.data.meal * ($scope.data.tax * .01));
			$scope.tiptotal = $scope.data.meal * ($scope.data.tip * .01);
			$scope.totaltotal = $scope.subtotal + $scope.tiptotal;
		}

		function earningsInfo(){
			$scope.meal_count++;
			$scope.tip_average = ($scope.tip_total + $scope.tiptotal)/$scope.meal_count;
			$scope.tip_total = $scope.tip_total + $scope.tiptotal;
		}

		$scope.submit = function(){
			if($scope.detailsForm.$valid) {
				customerCharge();
				earningsInfo();
				$scope.data = init();
			}
			else{
				console.log('form is not valid, cats r valid');
			}
		};

		$scope.reset = function(){
			$scope.data = init();
			$scope.tip_total = 0;
			$scope.meal_count = 0;
			$scope.tip_average = 0;
			$scope.tiptotal = 0;
			$scope.subtotal = 0;
			$scope.totaltotal = 0;
		};


	})