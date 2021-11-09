class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  set(key, value) {
    let address = this._hash(key);
    if(!this.data[address]){
        this.data[address] = [];
    }
    this.data[address].push([key, value]);
  } //O(1)

  get(key){
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if(currentBucket){
        currentBucket.forEach(array => {
          if(array[0] === key){
            return array[1];
          }
        })
    }
    return undefined;
  } //O(1) without collisions

  keys(){
    const keysArray = [];
    for(let i=0; i<this.data.length; i++){
      if(this.data[i] != undefined){
        // console.log(this.data);
        if(this.data[i].length > 1){
          this.data[i].forEach(item => {
            keysArray.push(item[0]);
          })
        } else {
          keysArray.push(this.data[i][0][0]);
        }
      }
    }
    return keysArray;
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  } //O(1)
}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000);
myHashTable.set('oranges', 9);
myHashTable.set('apples', 2);
myHashTable.keys();