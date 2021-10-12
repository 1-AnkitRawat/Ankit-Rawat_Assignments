// // Qus1 -

const a = 5;
console.log(a);

// //Qus 2
var b = 10;
if (b == 10) {
    let b = 5;
    console.log(b);
}
console.log(b);

// //Qus 3--

let Order = {
    "id": 201,
    "title": "pen",
    "price": "Rs." + 10,

    printOrder() {
        console.log("id :" + this.id);
        console.log("title :" + this.title);
    },
    getPrice() {
        console.log("Price : " + this.price);
    }
}
let Order1 = Object.assign(Order);
Order1.printOrder();
Order1.getPrice();

// // Qus 4--

// var names = ['Tom','Ivan','Jerry'];
//         var obj1=new Object();
//         var obj2=new Object();
//         var obj3=new Object();
//         var newArr = new Array();
//         obj1.name=names[0];
//         obj1.length=names[0].length;
//         newArr.push(obj1);
//         obj2.name=names[1];
//         obj2.length=names[1].length;
//         newArr.push(obj2);
//         obj3.name=names[2];
//         obj3.length=names[2].length;
//         newArr.push(obj3);
//         console.log(newArr)

let someJasonArray = ["tom", "heena", "Akhila"];
var len = someJasonArray.length, output = [];



for (var i = 0; i < len; i++) {
    output.push(someJasonArray[i], someJasonArray[i].length);

}

console.log(output);

// // Qus 5--

// // (a)->

let add = (a, b) => { return a + b; }
console.log(add(5, 10));

// // (b)->

let userFriends = (userName, ...friends) => {
    console.log(userName);
    console.log("list of frients : ")
    for (let i in friends) {
        console.log(friends[i]);
    }
}
let friends = ["Diode", "Radio", "Kira"];
userFriends("Adam", friends);

// (c)->

let printCapitalNames = () => {
    for (let i in names) {
        console.log(names[i].toUpperCase);
    }
}
let names1 = ['Diode', 'Radio', 'Kira', 'Hokage'];
printCapitalNames(...names1);


// // Qus 6->

let names = "Dodi"
const deskNo = 102;
let laptopName = "Dell";
let laptopModel = "ES2015";

let message = `Hello SYSNET, My name is ${names},Laptop Company
is ${laptopName} and laptop model ${laptopModel} and desk no
${deskNo}.
There is some problem raising in the laptop please resolve the issue

Thanks ans Regards
${names}`

console.log(message);

// // Qus 7->

// // (a)->

var arr = ["Cricket", "Football", "Hockey", "Tennis"];
for (let i of arr) {
    if (i.match(/Hoc/g)) {
        console.log(i)
    }
}


// (b)-

var organization = {
    name: "Diode", address:
    {
        city: "Dehradun", pincode: 248007
    }
};
let { name, address } = organization;
console.log(address.pincode);


// Qus 8->

class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
}
class SavingsAccount extends Account {
    constructor(id, name, balance, interest) {
        super(id, name, balance);
        this.interest = interest;
    }
    totalBalance = () => {
        this.balance += this.interest;
        console.log(this.balance);
    };
}
class CurrentAccount extends Account {
    constructor(id, name, balance, cashCredit) {
        super(id, name, balance);
        this.cashCredit = cashCredit;
    }
    totalBalance = () => {
        this.balance += this.cashCredit;
        console.log(this.balance);
    };
}

let S1 = new SavingsAccount(31, "Diode", 300, 400);
let S2 = new CurrentAccount(31, "Radio", 800, 300);
S1.totalBalance();
S2.totalBalance();
