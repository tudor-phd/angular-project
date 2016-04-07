'use strict';
var myApp = angular.module('myApp',[]);

      myApp.controller('dataController', function($http, $scope)
	{  

		var romoveButton = document.getElementById('removeButton');

		$scope.buttonsText = function(){
		$scope.load20   = "Load 20 rows";
		$scope.load100  = "Load 100 rows";
		$scope.load250  = "Load 250 rows";
		$scope.load500  = "Load 500 rows";
		$scope.load1000 = "Load 1000 rows";
		$scope.selectedRows = '';
	};
	    $scope.buttonsText();


		$http.get(localURL)
	      .success(function(results) { 
	      	$scope.cleanInput();
	      	$scope.results = results.slice(0, 20);
	      	$scope.buttonsText();
	      	$scope.load20   = "Loaded 20 rows";
	      	removeButton.style.visibility = 'visible';
	      });

	      $scope.loadRows1 = function(){
	      	$http.get(localURL)
	      .success(function(results) { 
	      	$scope.cleanInput();
	      	$scope.results = results.slice(0, 20);
	      	$scope.buttonsText();
	      	$scope.load20  = "Loaded 20 rows";
	      	removeButton.style.visibility = 'visible';
	      });
	  }

	      $scope.loadRows2 = function(){
	      	$http.get(localURL)
	      .success(function(results) { 
	      	$scope.cleanInput();
	      	$scope.results = results.slice(0, 100);
	      	$scope.buttonsText();
	      	$scope.load100  = "Loaded 100 rows";
	      	removeButton.style.visibility = 'visible';
	      });
	  }

	       $scope.loadRows3 = function(){
	      	$http.get(localURL)
	      .success(function(results) { 
	      	$scope.cleanInput();
	      	$scope.results = results.slice(0, 250);
	      	$scope.buttonsText();
	      	$scope.load250  = "Loaded 250 rows";
	      	removeButton.style.visibility = 'visible';
	      });
	  }

	       $scope.loadRows4 = function(){
	      	$http.get(localURL)
	      .success(function(results) { 
	      	$scope.cleanInput();
	      	$scope.results = results.slice(0, 500);
	      	$scope.buttonsText();
	      	$scope.load500  = "Loaded 500 rows";
	      	removeButton.style.visibility = 'visible';
	      });
	  }

	       $scope.loadRows5 = function(){
	      	$http.get(localURL)
	      .success(function(results) { 
	      	$scope.cleanInput();
	      	$scope.results = results.slice(0, 1000);
	      	$scope.buttonsText();
	      	$scope.load1000 = "Loaded 1000 rows";
	      	removeButton.style.visibility = 'visible';
	      });
	      }

	        $scope.checkAll = function() {
			   angular.forEach($scope.results, function(val) {
			         val.selected = $scope.selectedAll;
			   });
			 };

			 $scope.removeRow = function () {
			  $scope.buttonsText();
			  $scope.results = '';
			  romoveButton.style.visibility = 'hidden';
			};

			$scope.cleanInput = function(){
				$scope.test='';
			};

			$scope.selectedNumber = function(){
				var number = document.querySelectorAll('input[type="checkbox"]:checked').length;
				
				if(number===0){
					$scope.selectedRows = '';
				}
				if(number===1){
					$scope.selectedRows = number +' item selected'
				}
				else{
					$scope.selectedRows = number +' items selected'
				}
			}
	})
