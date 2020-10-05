import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  baseUrl:string = environment.baseUrl;
  loggedInCustomer:Customer;

  constructor(private httpClient:HttpClient) { }
  async loginCustomer(username:string,password:string):Promise<Customer>{
    return await this.httpClient.get<Customer>(`${this.baseUrl}/customers/login?username=${username}&password=${password}`).toPromise();
  }
}
