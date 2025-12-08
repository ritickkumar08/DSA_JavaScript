
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)

}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    return minHeight(root)
};
function minHeight(root) {
    if(!root) return null

    let leftHeight = minHeight(root.left)
    let rightHeight = minHeight(root.right)

    return Math.min(leftHeight,rightHeight) + 1
}