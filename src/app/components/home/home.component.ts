import { AccountService } from '../../services/account.service';
import { Account } from '../../models/account';
import { Component, OnInit, ViewChild, ɵALLOW_MULTIPLE_PLATFORMS } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { __await } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  now:Date = new Date();
  //dayPeriod = -1 for morning, 0 for afternoon, and 1 for night
  //morning is between 5am - 11am (not including 11am)
  //afternoon is between 11am - 5pm (not including 5pm)
  //night is between 5pm - 5am (not including 5am)
  dayPeriod;

  constructor(private cserv:CustomerService, private router:Router, private aserv:AccountService) {
    setInterval(()=>{
      this.now = new Date();
      this.dayPeriod = (this.now.getHours() < 11 && this.now.getHours() >= 5) ? -1 : (this.now.getHours() < 17) ? 0 : 1;
    },6000)
   }

  user:Customer = this.cserv.loggedInCustomer;
  accounts:Account[];
  
  ngOnInit(): void {
    this.now = new Date();
    this.dayPeriod = (this.now.getHours() < 11 && this.now.getHours() >= 5) ? -1 : (this.now.getHours() < 17) ? 0 : 1;
    this.getAccounts();
  }
  
  async getAccounts(){
    this.accounts = await this.aserv.getAllAccounts();
  }
  updateAccount(event){
    let insertionType = (event.target.innerText==='Deposit') ? 1 : (event.target.innerText==='Withdraw') ? -1 : 0;
    let balanceChange = 400;
    let aId = event.target.value;
    let account:Account = this.accounts.find((a) => a.aId == aId);
    console.log(account);
    account.balance += balanceChange*insertionType;
    console.log(account);
    
  }
  logOut(){
    this.router.navigateByUrl('/login')
  }
}
