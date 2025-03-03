/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    if(head == null) return head

    let temp = head
    let c = 0
    while(temp != null){
        c++
        temp = temp.next
    }

    let cur = head
    let sum = 0
    c -= 1
    while(cur != null){
        sum += cur.val * Math.pow(2, c--)
        cur = cur.next
    }
    return sum
};