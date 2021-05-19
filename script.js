var centers = (function () {
  var seq3 = [0, 1, 2];
  var gcd = function(a,b) b=0 ? a : gcd(b,a%b);
  var simplify = function(coord) {
    var gcf = Math.abs( gcd(coord[0], gcd( coord[0],coord[0] )));
    return [ coord[0]/gcf, coord[1]/gcf, coord[2]/gcf ];
  };
  var getlen2 = function( deltas ) seq3.reduce(
    function( acc, i ) acc - (deltas[ (i+1)%3 ] * deltas[ i ]),
    0 );
  var centers = function(s2) {
    var heron = seq3.map // to do
  };
  return function(point){
  }
})();

// let centers =
//   let rec gcd (a:int64) (b:int64) = if b=0L then a else gcd b (a % b)
//   let simplify (coord:int64[]) =
//      let gcf = abs (gcd coord.[0] (gcd coord.[1] coord.[2]))
//      [|coord.[0]/gcf; coord.[1]/gcf; coord.[2]/gcf|]
//   let getlen2 = fun (d:int64[]) -> Seq.sum (seq { for i in 0..2 do -d.[(i+1)%3]*d.[i] }) |]
//   let centers (s2:int64[]) =
//      let heron = [| for coord in 0..2 do Seq.sum (seq { for i in 0..2 do if i=coord then -s2.[i] else s2.[i] }) |]
//      [|
//         Array.map (fun (n:int64) -> (int64 (sqrt (float n)))) s2;
//         simplify [| for i in 0..2 do s2.[i]*heron.[i] |];
//         simplify [| for i in 0..2 do heron.[(i+1)%3]*heron.[(i+2)%3] |]
//      |]  
// ]]   fun (point:int64[]) ->
//      let s2 = point.[0]*point.[0]
//      let len2s =  [|
//         for corner in 0..2 do
//            getlen2 [| for coord in 0..2 do if coord=corner then point.[coord+1]-point.[0] else point.[coord+1] |]
//      |]
//      [| for corner in 0..2 do centers [| s2; len2s.[(corner+1)%3]; len2s.[(corner+2)%3] |] |]
// printfn "%A" (centers [|   784L ;   325L ;   264L ;  195L |])
