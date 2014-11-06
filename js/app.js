/*
    app.js: main application script
    this is an Angular application
 */

"use strict";

angular.module('MoviesApp', [])
	.controller('MoviesController', function($scope) {
		
		$scope.movies = movies;
		$scope.filteredMovies = movies;
		

		// set up our sort
		$scope.sortCol = 'rank';
		$scope.sortReverse = false;

		$scope.titleSearch = undefined;

		$scope.sortBy = function(colName) {
			if($scope.sortCol == colName) {
				$scope.sortReverse = !$scope.sortReverse;
			} else {
				$scope.sortReverse = false; 
				$scope.sortCol = colName;
			}
		};

		$scope.isSortedBy = function(colName) {
			return $scope.sortCol == colName;
		}
 	});