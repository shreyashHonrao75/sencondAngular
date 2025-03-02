import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Ibike, Icars, Iperson } from './shared/models/persons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'I love Angular from TS File';
  skills : Array<string> = ["Html","JS","TS","Angular"]
  

  persons : Array<Iperson> = [
    {
      fname : "Jhon",
      lname : "Doe",
      email : "jd@gmail.com",
      Contact : 8764434353
    },
    {
      fname : "krishna",
      lname : "Biradar",
      email : "krishna@gmail.com",
      Contact : 632641221
    },
    
    {
      fname : "Ritesh",
      lname : "patil",
      email : "Ritesh@gmail.com",
      Contact : 786343631
    },
    
    {
      fname : "omkar",
      lname : "Mane",
      email : "omakr@gmail.com",
      Contact : 643464646
    },
    
    {
      fname : "rajesh",
      lname : "patil",
      email : "rajesh@gmail.com",
      Contact : 84572421343
    },
    
    {
      fname : "Jhon",
      lname : "Doe",
      email : "jd@gmail.com",
      Contact : 5343343334
    },
  ]

  
  cars : Array<Icars> = [
    {
      car : "Creta",
      Company : "hyundai",
      kmDriven : 45236,
      price : "9 Lakhs"
    },
    {
      car : "Venue",
      Company : "hyundai",
      kmDriven : 63535,
      price : "6 lakhs"
    },
    {
      car : "Aura",
      Company : "hyundai",
      kmDriven : 65655,
      price : "4 Lakhs"
    },
    {
      car : "Ertiga",
      Company : "Maruti Suzuki",
      kmDriven : 20000,
      price : "8 Lakhs"
    },
    {
      car : "Ciaz",
      Company : "Maruti Suzuki",
      kmDriven : 53354,
      price : "6 Lakhs"
    },

  ]
   
  bikes : Array<Ibike> =[
    {
       BikeName : "Unicorn",
       company : "Honda",
       price :  139262,
    },
    {
      BikeName : "sp125",
      company : "Honda",
      price :  109424,
    },
    {
     BikeName : "Xtreme",
     company : "Hero",
     price :  115946,
   },
   {
     BikeName : "pulsar",
     company : "Bajaj",
     price :  125289,
   },
  ]

  
  
}

