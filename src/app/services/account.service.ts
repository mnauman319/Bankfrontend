import { Account } from '../models/account';
import { CustomerService } from './customer.service';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  
  constructor(private httpClient:HttpClient, private cserv:CustomerService) { }
  cId:number = this.cserv.loggedInCustomer.cId;
  baseUrl:string = environment.baseUrl + `/customers/${this.cId}/accounts`;
  async getAllAccounts():Promise<Account[]>{
    return await this.httpClient.get<Account[]>(`${this.baseUrl}`).toPromise();
  }
  async getAllAccountsLessThan(value:number):Promise<Account[]>{
    return await this.httpClient.get<Account[]>(`${this.baseUrl}?balancelessthan=${value}`).toPromise();
  }
  async getAllAccountsGreaterThan(value:number):Promise<Account[]>{
    return await this.httpClient.get<Account[]>(`${this.baseUrl}?balancegreaterthan=${value}`).toPromise();
  }
  async getAllAccountsLessThanAndGreaterThan(value1:number,value2:number):Promise<Account[]>{
    return await this.httpClient.get<Account[]>(`${this.baseUrl}?balancelessthan=${value1}&balancegreaterthan=${value2}`).toPromise();
  }
  async getAccountById(aId:number):Promise<Account>{
    return await this.httpClient.get<Account>(`${this.baseUrl}/${aId}`).toPromise();
  }
  async createAccount(account:Account):Promise<Account>{
    return await this.httpClient.post<Account>(`${this.baseUrl}`,account).toPromise();
  }
  async updateAccount(account:Account):Promise<Account>{
    return await this.httpClient.put<Account>(`${this.baseUrl}`,account).toPromise();
  }
  async deleteAccount(aId:number):Promise<boolean>{
    return await this.httpClient.delete<boolean>(`${this.baseUrl}/${aId}`).toPromise();
  }
  
}
