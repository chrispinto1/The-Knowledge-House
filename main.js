// 1.
//  Using the filter method, filter out the sedans.
// output =>
//  { brand: 'Toyota', model: 'camry', type: 'sedan' },
//   { brand: 'Hyundai', model: 'Sonata', type: 'sedan' }
const carBrands = [
    { brand: "Ford", model: "mustang", type: "convertible" },
    { brand: "Toyota", model: "camry", type: "sedan" },
    { brand: "Ram", model: "1500", type: "pickup" },
    { brand: "Hyundai", model: "Sonata", type: "sedan" },
    { brand: "Jeep", model: "wrangler", type: "suv" },
    { brand: "Nissan", model: "frontier", type: "pickup" },
  ];

const sedanCars = carBrands.filter(brand => brand.type === 'sedan')
  
  /* 2.
   * reverseString takes a string
   * and should return the reverse of the string, you cannot use .reverse method
   * e.g., reverseString('cat') => 'tac'
   */

const reverseString = (string) => {
    console.log(string)
    let reversedString = ''
    for(let i = string.length - 1; i >= 0; i--){
        reversedString+=string[i]
    }
    return reversedString
}

// console.log(reverseString('helloworld'))
  
//   // 3.
//   // Using Reduce,
//   // Given an array of all your wishlist items, figure out
//   // how much it would cost to just buy everything at once
//   // In other words, the total of all the prices in the array
//   // of objects
//   // The output should eqaute to 227005
  let wishlist = [
    { title: "tesla", price: 90000 },
    { title: "tesla", price: 45000 },
    { title: "tesla", price: 5 },
    { title: "tesla", price: 2000 },
    { title: "tesla", price: 90000 },
  ];
//   function shop(arr) {}
//   console.log(shop(wishlist));

const shop = (cart) => {
    let total = 0
    return cart.reduce((accumulator, currValue) => {
        return accumulator + currValue.price
    }, total)
}

console.log(shop(wishlist))
  
//   // 4.
//   //Explain recursion in your own words,
//   // give an example of a recursive algorithm, and explain how it works
//   //Make sure to detail the steps that make up a recursive algorithm
//   // A detailed explanation.

/*
    Recursion is form of looping where in this case, the fucntion will be calling itself
    until it hits an end case. An example of this, is when summing all nodes in a binary tree.
    In the algorithm, you will need to keep calling itself until you reach a node that doesn't 
    have a left or a right node. This would then return a value that would be used in a previous
    function call until we get back to the top most node where we intially started the call

    The example would be:
            1
          /   \
        2       3
      /   \   /   \
     4     5 6     7

    Using recursion, we would start with the top most node and work our way down

    const sumNodes = (node) => {
        if(node === null){
            return 0
        }
        return node.value + sumNodes(node.left) + sumNodes(node.right)
    }

    What this function is doing is first checking to see if the node we are currently at exists or not.
    If it doesn't exist, it will return and then all the previous functions calls will start to return.
    Before that, if the node isn't null, it will take the current value and add it to the sums of the
    next nodes to the left and to the right. 
    
    So for example, if we start at 2, the node isn't null so we continue and return the sum of 1 + sumNodes(2) + sumNodes(3).
    When we continue our way down because we have two function calls. At node 2, it isn't null so we return
    the sum of 2 + sumNodes(4) + sumNodes(5). Then it will work its way down again and go to the next node 4.
    Here the node isn't null yet so we have another return statement of 4 + sumNodes(node.left) + sumNodes(node.right).
    Now that we hit a case where it is in fact null, we then will stop here. When we get back to the node of 4, we now
    have a statement of 4 + 0 + 0 = 4. With this new value, we then go back up to the previous function call with this value
    and use it in the return statement which is we remember was at node 2 which will now be 2 + 4 + sumNodes(5).
    This will now go to the right node at node 2 and work its way down again. In this example, we have two calls being done in
    the same statement so we need to wait till the first function call is finished before starting the next one

    Here is the full list of all the return statements in order

    Starting Node
    1 + sumNodes(2) + sumNodes(3)

    Going Left First
    2 + sumNodes(4) + sumNodes(5)

    Going Left From node 4 and hitting the end since next nodes are null
    4 + sumNodes(node.left) + sumNodes(node.right) => 4 + 0 + 0 = 4

    Back to node 2 now going to the right
    2 + 4 + sumNodes(5)

    Going Left From node 5 and hitting the end since next nodes are null
    5 + sumNodes(node.left) + sumNodes(node.right) => 5 + 0 + 0 = 5

    Back to node 2 to get the total sum
    2 + 4 + 5 = 11

    Returning back Noode 1 and going to the right noow
    1 + 11 + sumNodes(3)

    Going Left to Node 3
    3 + sumNodes(6) + sumNodes(7)

    Going Left From node 3 and hitting the end since next nodes are null
    6 + sumNodes(node.left) + sumNodes(node.right) => 6 + 0 + 0 = 6

    Return to Node 3 with the result from Node 6
    3 + 6 + sumNodes(7)

    Going right to Node 7
    7 + sumNodes(node.left) + sumNodes(node.right) => 7 + 0 + 0 = 7

    Returning to Node 3 to now add all the sums
    3 + 6 + 7 = 16

    Returning to Node 1 to get all the sums from all nodes
    1 + 11 + 16 = 28

    What recursion is doing is adding the function call to a stack and once the most top function call finishes, or returns,
    it will then execute the previous function call and add more to the stack as needed. This concept is also known as
    LIFO (Last in first out) since the most top function call will execute first before the rest.
*/