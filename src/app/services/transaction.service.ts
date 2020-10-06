import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseUrl:string = environment.baseUrl + "/transactions";

  constructor(private httpClient:HttpClient) { }

  async getAllTransactions(){
    return this.httpClient.get<Transaction[]>(this.baseUrl).toPromise();
  }
}
