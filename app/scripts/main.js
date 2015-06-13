console.log('\'Allo \'Allo!');


var backendApp = angular.module('backendApp', ['ngMaterial']);


backendApp.controller('formCtrl',['$scope', function($scope) {
  //   $mdIcon("bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg").then(function(iconEl) {
  //   element.append(iconEl);
  // });
      $scope.currency = 1;

      $scope.picUrls = [{order:1,url:""}];

      $scope.addPicUrl = function(){
        // var length = ;
        $scope.picUrls.push({order:$scope.picUrls.length+1, url:""});
      }
      $scope.deletePic = function(index){
        console.log($scope.picUrls)
        $scope.picUrls = $scope.picUrls.filter(function(d,i){
            return i!=index
        })
      }

    }]);



