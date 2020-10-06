import { Account } from './account';

export class Transaction {

    tId:number;
    account:Account;
    prevBalance:number;
    finalBalance:number;
    amount:number;
    date:Date;

    constructor(tId:number,account:Account,prevBalance:number,finalBalance:number,amount:number,date:Date){
        this.tId = tId;
        this.account = account;
        this.prevBalance = prevBalance;
        this.finalBalance =finalBalance;
        this.amount = amount;
        this.date = date;
    }
    
}