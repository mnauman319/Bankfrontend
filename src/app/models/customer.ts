import { Account } from './account';

export class Customer{

    cId:number;
    username:string;
    password:string;
    manager:boolean;
    accounts: Account[];

    constructor(cId:number,username:string,password:string,manager:boolean){
        this.cId = cId;
        this.username = username;
        this.password =password;
        this.manager = manager;
    }

}