class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//Iterative

// const depthFirstValues = root => {
//     if (root === null) return [];

//     const result = [];
//     const stack = [ root ];
//     while (stack.length > 0){
//         const current = stack.pop();
//         result.push(current.val);

//         if (current.left) stack.push(current.left);
//         if (current.right) stack.push(current.right);
//     }
//     return result;
// };

//Recursive

const depthFirstValues = root => {
    if (root === null) return [];
    const leftValues = depthFirstValues(root.left);
    const rightValues = depthFirstValues(root.right);
    return [ root.val, ...leftValues, ...rightValues ];
};
