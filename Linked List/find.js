class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// const find = (head, target) => {
//     let current = head;
//     while (current !== null){
//         if(current.val === target) return true;
//         current = current.next;
//     }
//     return false;
// };

const find = (head, target) => {
    if (head === null) return false;
    if(head.val === target) return true;
    return find(head.next, target);
};