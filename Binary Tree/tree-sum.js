class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//Iterative

const treeSum = root => {
    if (root === null) return 0;

    let sum = 0;
    const queue = [ root ];
    while (queue.length > 0){
        const current = queue.shift();
        sum += current.val;

        if (current.left != null) queue.push(current.left);
        if (current.right != null) queue.push(current.right);
    }

    return sum;
};

// Recursive

// const treeSum = root => {
//     if (root === null) return 0;

//     return root.val + treeSum(root.left) + treeSum(root.right);
// };
