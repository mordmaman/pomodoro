var myApp= angular.module('myApp', []);

myApp.controller('myController', function($scope, $interval, $timeout){
   $scope.duration=25.00;
   $scope.break=5.00;
   $scope.isDisabled = false;
   $scope.cycle = 2;
   
   $scope.numero = 3;
   
   $scope.mytimeout = $scope.numero;
   $scope.cycles = $scope.cycle;
  
   $scope.startCountDown = function(){
       console.log("startCountdown()");
       if ($scope.isDisabled == true){
           return;
       }
       else{
           console.log("startCountdown() else");
       $scope.countDown();
       }
   }
   
   $scope.countDown = function(){
       console.log("in countdown(), numero = " + $scope.numero + " & cycle = " + $scope.cycle);
       //var count = $scope.numero;
       
       
           console.log("in while");
           var ticktock = function() {
               if ($scope.numero == 0) {
                   console.log($scope.numero + " time's over");
                   $scope.cycle--;
                   if ($scope.cycle > 0){
                   $scope.numero = 3;
                   $scope.countDown();
                   }
                   else{
                       console.log("all cycles finished");
                   }
               }
               else {
                   $scope.numero--;
                   $timeout(ticktock, 1000);
               }
           };
           $scope.numero;
           ticktock()

       //closes while 
        //$scope.cycle--;
         
       }
       
       
   
    
   
//    $scope.countDown = function (){
//        console.log("in countdown(), numero = " + $scope.numero + " & cycle = " + $scope.cycle);
       
//        while($scope.cycles > 0) {
//            console.log("in WHILE countdown(), numero = " + $scope.numero + " & cycle = " + $scope.cycles);
//            $scope.isDisabled = true;
           
//            if($scope.numero > 0) {
//                console.log("in the if statement" + $scope.numero);
//                //$scope.numero--
//                $scope.mytimeout = $timeout(function() {$scope.numero--;
//                 }, 1000);
//                // $scope.numero--
//                     // $scope.numero--;
//                     // console.log($scope.numero);
//                     // $scope.mytimeout = $timeout(1000);
//                 }
                
//             else {
//                 $scope.cycles--;
//             }
//         //    else {
//         //        //$scope.cycle--;
//         //             $scope.numero = 0;
//         //             $timeout(function(){alert ("time is up!");
//         //             }, 1000)
//         //    }
           
           
           
//        }//closes the while
       
       
//    }//closes function
   
   ///////////////////////////////////////////////////////////////////////
   
   $scope.stop = function(){
       $timeout.cancel($scope.numero);
       alert("timer stopped.");
   }
   
   $scope.reset = function() {
      $scope.$broadcast('timer-stopped', $scope.numero);
      //alert("reset");
       $scope.numero = 25;
       $timeout.cancel($scope.mytimeout);
       return;
   }
   
   
   
   //var mytimeout = $timeout($scope.countDown, 1000);
  
  
   
   
    
    
   //ng-click functions to increase or decrease time
   
   $scope.addOneBreak = function(){
     $scope.break++;  
   }
   
   $scope.takeOneBreak = function(){
     $scope.break--;  
   }
   
   //provides the number number to go up and down
   
   $scope.addOneBreak = function(){
     $scope.numero++;  
   }
   
   $scope.takeOneBreak = function(){
     $scope.numero--;  
   }
   
   
   $scope.addOneDur = function(){
     $scope.duration++;  
   }
   
   $scope.takeOneDur = function(){
     $scope.duration--;  
   }
   
   $scope.addOneCycle = function(){
       $scope.cycle++; 
   }
   
   $scope.takeOneCycle = function(){
       $scope.cycle--; 
   }
   
   $scope.start = function() {
       var timedur=$scope.duration*60;
       $scope.timedur = $timeout($scope.timedur, 1000);
      // timedur = timedur--;
       console.log(timedur);
        
   }
});

