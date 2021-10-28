import { Component, OnInit } from '@angular/core';
import { sidebarTogle } from './sidebarTogle';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Toggle the side navigation
    sidebarTogle();

  }

}

