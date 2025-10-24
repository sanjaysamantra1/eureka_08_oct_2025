let user = { name: 'sachin', 'age': 45, add: 'bangalore' };

let all_keys = Object.keys(user);
console.log(all_keys);

let all_values = Object.values(user);
console.log(all_values);

let all_entries = Object.entries(user);
console.log(all_entries);

let userObj = Object.fromEntries(all_entries);
console.log(userObj)