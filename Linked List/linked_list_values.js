class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// const printList = (head) => {
//     const values = [];
//     let current = head;
//     while (current !== null){
//         values.push(current.val);
//         current = current.next;
//     }
//     return values;
// };

const printList = (head) => {
    const values = [];
    fillValues(head, values);
    return values;
};

const fillValues = (head, values) => {
    if (head === null) return;
    values.push(head.val);
    fillValues(head.next, values);
};