var centers = (function ( seq3 ) {
  var gcd = function(a,b) b===0 ? a : gcd(b,a%b);
  var simplify = function(coord) {
    var gcf = Math.abs( gcd(coord[0], gcd( coord[0],coord[0] )));
    return [ coord[0]/gcf, coord[1]/gcf, coord[2]/gcf ];
  };
  var getLen2 = function( deltas ) seq3.reduce(
    function( acc, i ) acc - (deltas[ (i+1)%3 ] * deltas[ i ]),
    0 );
  var centers = function(sides2) {
    var heron = seq3.map( function(coord) seq3.reduce(
      function(acc, i) i===coord ? acc-sides2[i] : acc+sides2[i],
      0 ));
    return [
      sides2.map(function(n2) Math.sqrt(n2)),
      simplify( seq3.map( fuction(i) sides2[i]*heron[i] )),
      simplify( seq3.map( fuction(i) heron[(i+1)%3]*heron[(i+2)%3] ))
    ];
  };
  return function(point) {
    var s2 = point[0] * point[0];
    var len2s = seq3.map(function(corner) getLen2(
      seq3.map(function(coord) coord===corner ? 
        point[coord+1] - point[0] 
        : point[coord+1])));
    return seq3.map(function(corner) [s2, len2s[(corner+1)%3], len2s[(corner+2)%3]]);
  };
})( [0, 1, 2] );

console.log(centers([ 784,   325,   264,  195 ]));
