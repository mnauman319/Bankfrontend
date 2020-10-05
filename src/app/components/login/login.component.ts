import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from '../../services/customer.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private cserv:CustomerService,private router:Router) { }
  
  username:string;
  password:string;

  ngOnInit(): void {
  }

  async login(){
    
    let cust:Customer = await this.cserv.loginCustomer(this.username,this.password);
    if(cust !== undefined){
      this.cserv.loggedInCustomer = cust;
      this.router.navigateByUrl('home');
    }
  }
}
