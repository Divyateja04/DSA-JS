//in arrays we have index and a value, in hash tables we get to set a key-value pairs. This key is used as index to find the value
//Every object in JS is a hash

//1.lookup() O(1)
//2.insert() O(1)
//3.delete() O(1)
//4.search() O(1)

let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function(){
    console.log("ahhhhhh");
  }
}

user.age //O(1)
user.spell = 'abra kadabra'; //O(1)
user.scream; //O(1)

//Hash tables have fast lookups, fast inserts and flexible keys
//But they are unordered and slow key iteration
//We need good collision resolutions