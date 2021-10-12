// Qus-2->

class Account{
    constructor(id,name,balance)
    {
        this.id = id;
        this.name = name;
        this.balance = balance; 
    }
}
class SavingsAccount extends Account{
    constructor(id,name,balance,interest)
    {
        super(id,name,balance);
        this.interest = interest;
    }
    totalBalance = () => { this.balance += this.interest;
        console.log(this.balance);};
}

class CurrentAccount extends Account{
    constructor(id,name,balance,cashCredit)
    {
        super(id,name,balance);
        this.cashCredit = cashCredit;
    }
    totalBalance = () => { this.balance += this.cashCredit;
        console.log(this.balance);};
}

let S1 = new SavingsAccount(1001,'Vinita',40400,4000);
let S2 = new CurrentAccount(10003, 'Anna', 30050,3800);
 const y=S1.totalBalance();
const z=S2.totalBalance();
console.log(y+z);

// Qus-3->

interface Printable{
    fname?:string;
    id?: number;
    area?:Number;
};
 
let circle :Printable ={
   area: 720,
};

let employee :Printable = {
    fname: "Aliya",
    id:500,
};

function printAll(circle, employee){
    console.log(circle);
    console.log(employee);
}

printAll(circle,employee);