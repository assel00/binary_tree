function getNum() {             //Rand [-100; 100] and adding it ro the tree;
    let max = 100, min = -100;
    var num = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(num)
    myTree.add(num);

}

document.addEventListener('keydown', e => {
    getNum()
})
//Creating a tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    add(value) {
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode;
            //Adding newNode to HTML
            var articleDiv = document.querySelector("div.article");
            var elem = document.createElement("h1");
            var elemText = document.createTextNode(newNode.value);
            elem.appendChild(elemText);
            articleDiv.appendChild(elem);
            return;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (newNode.value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;

                    var articleDiv = document.querySelector("div.article");
                    var elem = document.createElement("span");
                    elem.className = 'left';
                    var elemText = document.createTextNode(newNode.value);
                    elem.appendChild(elemText);
                    articleDiv.appendChild(elem);


                    return;
                }
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;

                    var articleDiv = document.querySelector("div.article");
                    var elem = document.createElement("span");
                    elem.className = 'right';
                    var elemText = document.createTextNode(newNode.value);
                    elem.appendChild(elemText);
                    articleDiv.appendChild(elem);
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }
}
//Initial leaves of tree
const myTree = new BinaryTree();
myTree.add(8);
myTree.add(7);
myTree.add(9);
myTree.add(5);
myTree.add(10);






