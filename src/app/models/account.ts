export class Account{

    aId:number;
    cId:number;
    name:string;
    balance:number;

    constructor(aId:number,cId:number,name:string,balance:number){
        this.aId = aId;
        this.cId = cId;
        this.name = name;
        this.balance = balance;
    }
}