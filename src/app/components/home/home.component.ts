import { AccountService } from '../../services/account.service';
import { Account } from '../../models/account';
import { Component, OnInit, ViewChild, ɵALLOW_MULTIPLE_PLATFORMS } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { Transaction } from '../../models/transaction';
import { __await } from 'tslib';
import { TransactionService } from 'src/app/services/transaction.service';

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

  constructor(private cserv:CustomerService, private router:Router, private aserv:AccountService, private tserv:TransactionService) {
    setInterval(()=>{
      this.now = new Date();
      this.dayPeriod = (this.now.getHours() < 11 && this.now.getHours() >= 5) ? -1 : (this.now.getHours() < 17) ? 0 : 1;
    },6000)
   }

  user:Customer = this.cserv.loggedInCustomer;
  accounts:Account[];
  currentAccount:Account;
  transactions:Transaction[];
  balanceChange:number;
  showModal:boolean = false;

  ngOnInit(): void {
    this.now = new Date();
    this.dayPeriod = (this.now.getHours() < 11 && this.now.getHours() >= 5) ? -1 : (this.now.getHours() < 17) ? 0 : 1;
    this.getAccountsAndTransactions();
  }
  
  async getAccountsAndTransactions(){
    this.accounts = await this.aserv.getAllAccounts();
    this.transactions = await this.tserv.getAllTransactions();
  }
  async updateAccount(event){
    let insertionType = (event.target.innerText==='Deposit') ? 1 : (event.target.innerText==='Withdraw') ? -1 : 0;
    let account:Account = this.currentAccount;
    account.balance += this.balanceChange*insertionType;
    await this.aserv.updateAccount(account)
    this.getAccountsAndTransactions();
    this.showModal = false;
  }
  logOut(){
    this.router.navigateByUrl('/login')
  }
}
