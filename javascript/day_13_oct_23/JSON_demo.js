let user = { name: 'sachin', add: 'mumbai' };
console.log(user)
console.log(user.name, user.add);

// convert js objet to string
let userStr = JSON.stringify(user);
console.log(userStr)
console.log(userStr.name, userStr.add);

// string to object
let userObj = JSON.parse(userStr);
console.log(userObj)
console.log(userObj.name, userObj.add);



