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

function inorder(node) {
    if(node == null){
        return
    }

    inorder(node.left)
    console.log(node.value);
    inorder(node.right)
}
//callin inorder traversal print function
inorder(root)

//Time Complexity --> O(n)
//space Complexity --> height --> O(logn)
//worst case space complexity --> O(n)

function iterativeInorder(node) {
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