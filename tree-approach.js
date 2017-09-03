var sum = process.argv[2] || 10;
var count = 0;
var tree = {
  val: 0,
  left: null,
  right: null
};


function generateTree(node, diff) {
  // console.log("node : ", node, diff)
  if (node.val >= sum || node.val + diff > sum) {
    return null;
  }

  if (sum - node.val == diff) {
    // increment the count when node with value == sum is reached.
    count++

    return {
      val: sum,
      left: null,
      right: null
    }
  }
  var result = {
    val: node.val + diff,
    left: null,
    right: null
  };

  result.left = generateTree(result, 1)
  result.right = generateTree(result, 2)

  return result;

}

tree.left = generateTree(tree, 1)
tree.right = generateTree(tree, 2)

// console.log("tree : ", JSON.stringify(tree));
console.log("Sum to reach: ", sum);
console.log("ways or reaching with 1's and 2's : ", count);