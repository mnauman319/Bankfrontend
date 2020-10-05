export class Account{

    private aId:number;
    private cId:number;
    private name:string;
    private balance:number;

    constructor(aId:number,cId:number,name:string,balance:number){
        this.aId = aId;
        this.cId = cId;
        this.name = name;
        this.balance = balance;
    }

    public getAId(): number {
        return this.aId;
    }

    public setAId(aId: number): void {
        this.aId = aId;
    }

    public getCId(): number {
        return this.cId;
    }

    public setCId(cId: number): void {
        this.cId = cId;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getBalance(): number {
        return this.balance;
    }

    public setBalance(balance: number): void {
        this.balance = balance;
    }

}