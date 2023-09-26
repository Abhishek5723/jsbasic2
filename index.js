console.log('Hello jee');

let lastname='babbar';
let firstname=new String('love');

let message='this is my first message';
let copy=message.split(' ');
console.log(copy);

let message2 =`this
is my new message using backtik`;
console.log(message2);

let tarik=new Date();
console.log(tarik);



let tarik2=new Date(1998,11,20,7)
console.log(tarik2);

tarik2.setFullYear(2002);
tarik2.getFullYear();
console.log(tarik2);


// Arrays 
let arr=[1,2,3,4,5];
console.log(arr);

// insertion in array 
arr.push(9); //used to insert number at the end
arr.unshift(8); //used to insert element at starting
arr.splice(4,0,6); //used to insert element at any position
console.log(arr);

// Searching 
console.log(arr.indexOf(9));