class TreeNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

let root = new TreeNode(4)
root.left = new TreeNode(5)
root.right = new TreeNode(6)
root.left.left = new TreeNode(3)
root.right.right = new TreeNode(7)


console.log(root);

