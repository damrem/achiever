'use strict';


/**
 * @ngdoc function
 * @name app.controller:MouseListener
 * @description
 * # MouseListener
 * This controller's purpose is to catch global (body) mouse events 
 * and to broadcast them towards more specific controllers, such as ClickController.
 */



angular.module('app')

    .controller('MouseListener',
            ['$scope', '$window', '$log',
            function ($scope, $window, $log) {

                $scope.onClick = function () {
                    $log.log('onClick');
                    $scope.$broadcast('clicked');
                };

                $scope.moveIsSwipe = false;
                $scope.onMove = function ($event) {
                	//$log.log('onMove('+$event);
                    //$log.info($event === undefined);

                    //  when swiping, this method is called by both directives ng-mousemove and hm-drag
                    //  it would have the undesirable effect of firing twice the 'moved' signal, thus increasing the Movin' too quickly.
                    //  -> let's hack this

                    //  if there's no event, the call is made by ng-mousemove
                    if($event === undefined) {
                        //  if this is no actual swipe, the ng-mousemove is legible, we broadcast
                        if(!$scope.moveIsSwipe) {
                            $scope.$broadcast('moved');
                            //$log.log('ng-mousemove');
                        }
                    } else {
                        $scope.moveIsSwipe = true;
                        $scope.$broadcast('moved');
                        //$log.log('hm-drag');
                    }
                };


                $scope.onRelease = function ($event) {
                    //$log.log('onRelease('+$event);
                    //  we continue hacking by resetting the swipe when releasing
                    $scope.moveIsSwipe = false;

                    //  no more hacking, we do a regular broadcast
                    $scope.$broadcast('released');

                };
            }]);
