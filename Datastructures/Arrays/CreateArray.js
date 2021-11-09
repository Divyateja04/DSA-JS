const a = [];
//This is default but we can also create using classes from scratch
//We are assuming array is just a bunch of objects where key is the id

class MyArray{
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index){
    return this.data[index];
  }

  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  
  pop(){
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index){
    const item = this.data[index]; //Here we should delete the item and also change the indexes of the other items
    this.shiftItems(index);
  }

  shiftItems(index){
    for(let i=index; i<this.length - 1; i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("Hi");
newArray.push("You");
newArray.push("!");
console.log(newArray);
// newArray.pop();
// console.log(newArray);
newArray.delete(1);
console.log(newArray);
