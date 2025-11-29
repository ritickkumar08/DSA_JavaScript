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

function iterativePostOrder(root) {
    if(root == null){
        return [];
    }

    let st1 = [root]
    let st2 = []
    let res = []

    while(st1.length){
        let node = st1.pop()
        st2.push(node)

        if(node.left) st1.push(node.left)
        if(node.right) st1.push(node.right)
    }

    while(st2.length) res.push(st2.pop().value)

    return res
}
console.log(iterativePostOrder(root))
// function postorder(node) {
//     if(node == null){
//         return
//     }

//     postorder(node.left)
//     postorder(node.right)
//     console.log(node.value);
// }
// //callin inorder traversal print function
// postorder(root)

//Time Complexity --> O(n)
//space Complexity --> height --> O(logn)
//worst case space complexity --> O(n)
