import { Account } from './account';

export class Customer{

    private cId:number;
    private username:string;
    private password:string;
    private manager:boolean;
    private accounts: Account[];

    constructor(cId:number,username:string,password:string,manager:boolean){
        this.cId = cId;
        this.username = username;
        this.password =password;
        this.manager = manager;
    }

    public getCId(): number {
        return this.cId;
    }

    public setCId(cId: number): void {
        this.cId = cId;
    }

    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public isManager(): boolean {
        return this.manager;
    }

    public setManager(manager: boolean): void {
        this.manager = manager;
    }

    public getAccounts(): Account[] {
        return this.accounts;
    }

    public setAccounts(accounts: Account[]): void {
        this.accounts = accounts;
    }

}