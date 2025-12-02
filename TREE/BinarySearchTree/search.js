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

insert(1)
insert(2)
insert(3)
insert(4)
insert(5)
insert(6)

function search(root,target) {
    if(root == null){
        return false
    }

    if(root.value == target) return true
    
    if(target > root.value) return search(root.right,target)

    return search(root.left,target)
}

console.log(search(root,6))