// Code your solution in this file!
 function distanceFromHqInBlocks (distance) {
   if(distance > 42) {
       return distance -42;
   } else {
       return 42 - distance;
   }
     }

     distanceFromHqInBlocks(43)

     function distanceFromHqInFeet (distance) {
         return distanceFromHqInBlocks(distance) * 264; 
     }

     distanceFromHqInFeet(1)


     function distanceTravelledInFeet (begin, end) {
         if(begin < end) {
             return (end - begin) * 264;
         } else {
             return (begin - end ) * 264;
         }
     }

     distanceFromHqInFeet(43, 38)


     function calculatesFarePrice (begin, end) {
            const distanceTravelled = distanceTravelledInFeet (begin, end);

            if (distanceTravelled <= 400){
                return 0;
            } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
                return .02 * (distanceTravelled - 400);
            } else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
                return 25;
            }else {
                return `cannot travel that far`;
            }
     }

     calculatesFarePrice(45, 70)