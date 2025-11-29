class TreeNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.right.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)


function height(node) {
    if(node == null){
        return 0
    }

    let leftHeight = height(node.left)
    let rightHeight = height(node.right)
    
    let heightTree = Math.max(leftHeight , rightHeight) + 1

    return heightTree
}

console.log(height(root));
