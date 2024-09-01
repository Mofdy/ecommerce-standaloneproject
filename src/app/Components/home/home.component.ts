import { Component, OnInit } from '@angular/core';
import { Store } from '../../Models/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  store1: Store = new Store("ikea", ["branch1", "branch2"], "logoIkea.png");
  clientName: string = "client1";

  IsPurshased: boolean = false;
  Buy() {
    this.IsPurshased = !this.IsPurshased;
  }
  constructor() { }

  ngOnInit() {
  }

}
