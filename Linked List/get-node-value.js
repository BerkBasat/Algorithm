class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// const getNodeValue = (head, index) => {
//     if (head === null) return null;
//     if (index === 0) return head.val;
//     return getNodeValue(head.next, index - 1);
// };

const getNodeValue = (head, index) => {
    let current = head;
    let count = 0;
    while (current !== null){
        if (count === index) return current.val;
        count += 1;
        current = current.next;
    }
    return null;
};