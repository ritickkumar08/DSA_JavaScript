function preOrder(root) {
    if(root == null) return []

    let st = [root]
    let result = []
    while (st.length) {
        let node = st.pop()
        result.push(node)

        if(node.right) st.push(node.right)
        if(node.left) st.push(node.left)
    }
}


function postOrder(root){
    if(!root) return []

    let st1 = [root]
    let st2 = []
    let result = []
    while(st1.length){
        let node = st1.pop()
        st2.push(node)

        if(node.left) st1.push(node.left)
        if(node.right) st1.push(node.right)
    }

    while(st1.length) result.push(st2.pop().value)

    return result
}

function inorderTraversal(root) {
    let st = []
    let result = []
    let current = root

    while(current !== null && st.length){
        while(current !== null){
            st.push(current)
            current = current.left
        }

        current = st.pop()
        result.push(current.value)
        current = current.right
    }

    return result
}