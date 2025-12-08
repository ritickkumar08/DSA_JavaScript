
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);

    }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
// this is shit as it is shit , upgrade your thought process, or i must say build your thought process.this is the time and 
// that it will never return back, so be calm and focus on the righteous things.
var minDepth = function(root) {
    return minHeight(root)
};
function minHeight(root) {
    if(!root) return null

    let leftHeight = minHeight(root.left)
    let rightHeight = minHeight(root.right)

    return Math.min(leftHeight,rightHeight) + 1
}

//now the solution.
var minDepth = function(root) {
    if(!root) return 0;

    let queue = []
    queue.push[root,1] //we are passing the root node and the current depth, which is one 
    //,because we have passed the condition of having the element.

    while(queue.length > 0){
        let [node, depth] = queue.shift()

        if(!node.left && !node.right){ //if the node doesn't have a left or right node that
            //means its a leaf node and so return the depth that has been till now, the 
            //the satisfaction of the above condition. 
            return depth
        }

        if(node.left) queue.push([node.left, depth+1])
        if(node.right) queue.push([node.right, depth+1])
    }
};