class TreeNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
let root = null

function insert(val) {
    root = insertRec(root,val)
    return root
}

function insertRec(root,value) {
    if(root == null) {
        return new TreeNode(value)
    }

    if(value < root.value){
        root.left = insertRec(root.left, value)
    } else {
        root.right = insertRec(root.right, value)
    }

    return root
}

function inorder(root) {
    if(root == null){
        return
    }

    inorder(root.left)
    console.log(root.value);
    inorder(root.right)   
}

insert(1)
insert(2)
insert(8)
insert(9)
insert(10)
inorder(root)
