$(document).ready(init);

function init(){
  $('#sq-odds').click(squareOdds);
  $('#dest').click(dest);
  $('#power').click(power);
  $('#generator').click(generator);
}

function generator(){
  var [x, y] = $('#numbers').val().split(',').map(n=>n*1);  //if you input 2 and 3, it will create an array with [2, 3] (in the x and y position)

  var output = [for(j of gen(x)) for(k of gen(y)) {x:j, y:k}].map(o=>`<div>x: ${o.x} y:${o.y}</div>`);  //we are building an array; it's looping through the for loop, looping over the x generator and then looping over the y generator
    //taking this array of objects and passing them in to create a bunch of divs
  console.log(output);

  // for(j of gen(x)){  //calls the generator over and over again until it's done.
  //   //you're calling a function, it's returning a 0, it loops again and sends it back a 1, the two functions are talking back and forth
  //   console.log(j);
  // }
}

function* gen(x){
  for(var i = 0; i < x; i++){  //we want this generator to return one number at a time
    yield i;  //returns 0, then returns 1, then returns 2, returns 3...
  }
}

function power(){
  var numbers = $('#numbers').val().split(',').map(n=>n*1);
  var output = realPower(...numbers);  //'spread' spreads the numbers out
  console.log(output);
}

function realPower(base, exponent=2){  //defaults the exponent to 2, always put default parameters at the end
  return Math.pow(base, exponent);
}

function dest(){
  var numbers = $('#numbers').val().split(',').map(n=>n*1);
  var [a, v] = areaVol(...numbers);  //...number is the 'spread'; the array is being pulled apart and creates two variables called a and v
  console.log(a);
  console.log(v);

}

function areaVol(l, w, h){
  let area = l * w;
  let vol = area * h;
  return [area, vol];
}

function squareOdds(){
  //we are going to filter out the evens from the text box, and then square them
  var output = $('#numbers').val().split(',').map(n=>n*1).filter(n=>n%2===1).map(n=>n*n).map(n=>`<div>${n}</div>`);  //this turns an array of strings into an array of numbers
  $('#odds').append(output);
}
