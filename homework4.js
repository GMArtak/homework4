//Use While loop to create a function called 'triangleStars' that prints an upside-down triangle to the console of the given height. 

const one =function(x) {
  while(x>0){
    return one(x-1)+"*";
  }
  x = x-1;
 	 return " ";
};
const two = function(y){
	if(y===0){
		return " ";
	}
	return two(y-1)+" ";
};

const triangleStars = function(a) {
	const looop =function(b){
	  while (b>0){
	    console.log(two(a-b)+one(2*b-1));
		looop(b-1);
        b=b-a;
      }
      
};
  return looop(a);
};

//Write a function that takes a two dimensional array and returns a single array with all the values in the child arrays.

const erkrord= function(a){
    let p= [];
    let g= 0
   while(g < a.length){
     let j=0
     while(j<a[g].length){
       p[p.length]=a[g][j];
       j = j + 1
     };
     g = g + 1
   }
   return p;
 }

//Create a function 'findMinMax' that returns the largest number from the given array if the second argument is true.  It returns the smallest number in the given array if the second argument is false.

    const findMinMax= function(ab,rightt){
if(rightt){
 return Math.max.apply(null, ab);
}else{
 return Math.min.apply(null, ab);
}

}
//Create a function 'forEach' that takes an array and a function and then calls the given function once with each value in the given array.

const forEach = function (aua, ysu) {
    let ix = 0;
    while (ix < aua.length){
        ysu(aua[x]);
        ix = ix + 1;
    }
}

//Create a function 'sum' that takes an array of numbers and returns their sum.

const sum = function (array){
	let length = array.length;
	let hamar = 0;
	while (length > 0){
		hamar = hamar + array[length-1];
		length = length - 1;
	}
	return hamar;
     };

//Write a function 'reverse' that reverses the given string.  

  const reverse = function(string){
    let ayo = "";
    let voch = string.length - 1;
    while(voch>=0){
        ayo+=string[voch];
        voch = voch - 1;
    }
    return ayo;
}

// Create a function called checkerboard using While loop which, given a size argument, will draw an n by n checkerboard on the screen.  Example: checkerboard

const checkerboard=function(shax) {
	let zro = 0;
	while (zro<shax) {
		if(zro%2 != 0){
			c = " " + "*".repeat(shax)
		} else {
			c = "*".repeat(shax)
		}
		console.log(c);
		zro = zro+1;
	}
}