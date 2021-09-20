var prettyPrintWilder = function (users) {
    if (users === void 0) { users = []; }
    users.map(function (user) {
        console.log(user.name + " is " + user.age + " years old");
    });
};
var wilders = [];
var user1 = { name: "Pierre", age: 23 };
var user2 = { name: "Paul", birthday: "10/02/1990" };
var user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);
