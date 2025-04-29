import {Node} from './Node.js';
export class LinkedList{
    constructor() {
        this.headNode=null;
    }
    append(value){
        const newNode=new Node(value);
        if (!this.headNode){this.headNode=newNode;
            return;
        }
        let current=this.headNode;
        while(current.nextNode !==null){
            current=current.nextNode;
        }
        current.nextNode=newNode;
    }
    prepend(value){
        const newNode= new Node(value, this.headNode);
        this.headNode=newNode;
    }
    size(){
        let count=0;
        let current=this.headNode;
        while (current !==null){count++;current=current.nextNode;}
        return count;
    }
    head(){return this.headNode;}
    tail(){if(!this.headNode) return null;
        let currnet=this.headNode;
        while(current.nextNode !==null){current=current.nextNode;}
        return current;
    }
    at (index){
        let current=this.headNode;
        let count=0;
        while (current !==null){
            if(count===index)return current;
            count++;
            current=current.nextNode;
        }
        return null;
    }
    pop(){
        if(!this.headNode) return;
        if (!this.headNode.nextNode){this.headNode=null; return;}
        let current=this.headNode;
        while (current.nextNode.nextNode !==null){current=current.nextNode;}
        current.nextNode=null;
    }
    contains(value){
        let current=this.headNode;
        while (current !==null){
            if(current.value===value) return true;
            current=current.nextNode;
        }return false;
    }
    find(value){
        let current=this.headNode;
        let index=0;
        while (current !==null){
            if(current.value===value) return index;
            current=current.nextNode; index++;
        }return null;
    }
    toString(){
        let result='';
        let current=this.headNode;
        while (current !==null){
            result +=`(${current.value}) ->`;
            current=current.nextNode;
        }return result+'null';
    }
    insertAt(value, index){
        if (index===0) return this.prepend(value);
        const prev=this.at(index-1);
        if (!prev) return;
        const newNode=new Node(value, prev.nextNode);
        prev.nextNode=newNode;
    }
    removeAt(index){
        if(index===0&& this.headNode){
            this.headNode=this.headNode.nextNode; return;
        }
        const prev=this.at(index-1);
        if(!prev || !prev.nextNode) return;

        prev.nextNode=prev.nextNode.nextNode;
    }
}
