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

function preorder(node) {
    if(node == null){
        return
    }

    console.log(node.value);
    preorder(node.left)
    preorder(node.right)
}
//callin inorder traversal print function
preorder(root)

//Time Complexity --> O(n)
//space Complexity --> height --> O(logn)
//worst case space complexity --> O(n)

function iterativePreorder(node) {
    if(node == null){
        return
    }

    let st = [node]
    let res = []

    while(st.length){
        let root = st.pop()
        res.push(root.value)

        if(node.right) st.push(node.right)
        if(node.left) st.push(node.left)
    }
    return res
}