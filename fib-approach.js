// standard fibonacci recursive function
function fibA(n) {
  if (n <= 1)
    return n;
  else
    return fibA(n - 1) + fibA(n - 2);
}

// implementation is faster as it caches the once calculated value
function fibB(n) {
  if (n <= 1) {
    fibHolder[n] = n;
    return n;
  }

  if (fibHolder[n] != -1) {
    return fibHolder[n]
  } else {
    fibHolder[n] = fibB(n - 1) + fibB(n - 2)
    return fibHolder[n]
  }
}

function initHolder(max) {
  for (var i = max; i >= 0; i--) {
    fibHolder[i] = -1;
  }
}
// console.log("process.argv : ",process.argv);
var sum = process.argv[2] || 10;
var fibHolder = [];

function main() {
  console.log("Sum to reach: ", sum);
  sum = parseInt(sum)
  if (sum == NaN || sum <= 0) {
    console.log("No way reach the desired sum with 1's and 2's");
  }
  initHolder(sum + 1);
  count = fibB(sum + 1)
  console.log("ways or reaching with 1's and 2's : ", count);
  // console.log("fibHolder :", fibHolder);
}
// begin execution
main();