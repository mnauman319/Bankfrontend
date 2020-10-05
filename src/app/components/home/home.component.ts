import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';

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

  constructor(private cserv:CustomerService, private router:Router) {
    setInterval(()=>{
      this.now = new Date();
      this.dayPeriod = (this.now.getHours() < 11 && this.now.getHours() >= 5) ? -1 : (this.now.getHours() < 17) ? 0 : 1;
    },6000)
   }
  user:Customer = this.cserv.loggedInCustomer;
  
  ngOnInit(): void {
    this.now = new Date();
    this.dayPeriod = (this.now.getHours() < 11 && this.now.getHours() >= 5) ? -1 : (this.now.getHours() < 17) ? 0 : 1;
    this.user = new Customer(1,'DanTheMan','password',false)
  }

  logOut(){
    this.router.navigateByUrl('/login')
  }
}
