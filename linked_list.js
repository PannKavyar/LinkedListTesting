class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
   
 }
// const node1={
//       data : 100,
// };
// const node2={
//       data : 200,
// };
// node1.next=node2;
// console.log(node1);
class LinkedList{
    constructor(){
        this.head=null;
    }
    insertFirst(data){
        
        this.head=new Node(data,this.head);
    }

    size(){
        let count=0;
        let node=this.head;
        while(node){
            count++;
            node=node.next;
        }
        return count;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if(!this.head){
            return false;
        }

        let node=this.head;
        while(node){
            if(!node.next){
                return node;
            }
            node=node.next;
        }
    }

    getAt(index){
        if(!this.head){
            return;
        }
        let counter=0;
        let node=this.head;
        while(node){
            if(counter === index){
                return node;
            }
            counter ++;
            node=node.next;
        }
        return null;
    }

    removeFirst(){
        if (!this.head){
            return;
        }
        return this.head=this.head.next;
    }

    removeLast(){
        if (!this.head){
            return;
        }
        if(!this.head.next){
            this.head=null;
        }
        let previous=this.head;
        let node=previous.next;
        while(node.next){
            previous=node;
            node=node.next;
        }
        previous.next=null;
        return this.head;
    }

    insertLast(data){
        let last=this.getLast();
        if(last){
            last.next=new Node(data);
            return last;
        }
        else{
            this.head=new Node(data);
            return this.head;
        }
    }
    /*Creating Circular LinkedList*/
    createCircular(index){
         let lastNode=this.getLast();
         if(lastNode){
             lastNode.next=this.getAt(index);
             return lastNode;
         }
            return false;
    }
    clear(){
       return this.head=null;
    }

}
const linkedList=new LinkedList();
const node=new Node("Hey");
linkedList.head=node;
console.log(linkedList);
linkedList.insertFirst("Hi");
linkedList.insertFirst("Ok");
linkedList.insertFirst("Huh");

/*Find the midpoint node of the linked list.
If the linked list have an even number of the elements,return the node at the  end of the first half 
of the list.*/
/*Rule:Don't use the counter variable.Don't use the size of the linked list.Only iterate through the 
list one time */
/*======Finding midpoint of the linked list========*/
function getMidpoint(linkedList){
    let slow=linkedList.getFirst();
    let fast=linkedList.getFirst();
    while(fast.next && fast.next.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;
}


/*Check whether linked list is ciecular? If circular return 'true', if not return 'false'.*/
function checkCircular(linkedList){
let slow=linkedList.getFirst();
let fast=linkedList.getFirst();
while(fast.next && fast.next.next){
    slow=slow.next;
    fast=fast.next.next;
    if(slow === fast){
        return true;
    }
    
}
return false;

}

/* 
 * fromLastNode(linkedlist,2)
 *Given a linkedList and integer n, return the node which is the spaces from the last node.
 *Rule: Do not call the size of the linkedList.Assume that n always less than the size of the linkedList.
 */ 
/*return the node which is n space from the last node*/
function fromLastNode(linkedList,n){
    let slow=linkedList.getFirst();
    let fast=linkedList.getFirst();
    for(let i=0; i<n; i++){
      fast=fast.next;
   }
    while(fast.next){
        fast=fast.next;
        slow=slow.next;
    }
    return slow;
}


// console.log("Insert first data", linkedList);
// console.log("LinkedList size is:",linkedList.size());
// console.log("Get First Node",linkedList.getFirst());
// console.log("Get Last Node", linkedList.getLast());
// console.log("Remove First" , linkedList.removeFirst());
// console.log("Remove Last",linkedList.removeLast());
// console.log("Insert Last data is",linkedList.insertLast("Yes"));
// console.log("Get Insert Last Data is",linkedList.getLast());
//  linkedList.createCircular(1);
// console.log("=============================================");
// console.log("Get midpoint data is" , getMidpoint(linkedList));
// console.log("=============================================");
// console.log("Checking the LinledList is Circular" ,checkCircular(linkedList));
console.log("==============================================");
console.log("The node which is 3 space from the last node is", fromLastNode(linkedList,3));
// console.log(linkedList.clear());
// console.log(linkedList);